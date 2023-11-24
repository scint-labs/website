import os
import re
import subprocess
from datetime import datetime

import markdown
import yaml
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request

app = FastAPI()

app.mount("/styles", StaticFiles(directory="styles"), name="styles")
app.mount("/images", StaticFiles(directory="images"), name="images")
app.mount("/templates", StaticFiles(directory="templates"), name="templates")

templates = Jinja2Templates(directory="templates")


def create_preview(html_content, max_length=200):
    plain_text = re.sub("<[^<]+?>", "", html_content)

    return (
        (plain_text[:max_length] + "...")
        if len(plain_text) > max_length
        else plain_text
    )


def extract_headings_from_markdown(markdown_text):
    headings = []

    for line in markdown_text.split("\n"):
        if re.match(r"^#+ ", line):
            heading_text = line.split("# ")[1].strip()
            headings.append(heading_text)

    return headings


def load_markdown_files(folder_path):
    posts = {}
    for filename in os.listdir(folder_path):
        if filename.endswith(".md"):
            slug = filename[:-3]
            file_path = os.path.join(folder_path, filename)

            with open(file_path, "r") as file:
                content = file.read()
                parts = re.split(r"---\s*", content, 2)

                if len(parts) < 3:
                    continue

                front_matter = yaml.safe_load(parts[1])

                if "created" in front_matter and isinstance(
                    front_matter["created"], str
                ):
                    front_matter["created"] = datetime.strptime(
                        front_matter["created"], "%Y-%m-%d"
                    ).date()

                headings = extract_headings_from_markdown(parts[2])
                md_extensions = [
                    "markdown.extensions.codehilite",
                    "markdown.extensions.fenced_code",
                ]
                front_matter = yaml.safe_load(parts[1])
                html = markdown.markdown(parts[2], extensions=md_extensions)
                post = {
                    "metadata": front_matter,
                    "headings": headings,
                    "content": html,
                    "preview": front_matter.get("summary", ""),
                    "slug": slug,
                }

                posts[slug] = post

    return posts


@app.on_event("startup")
async def run_tailwind_build():
    subprocess.Popen(
        [
            "tailwindcss",
            "-i",
            "./styles/tailwind.css",
            "-o",
            "./styles/index.css",
            "--watch",
        ],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )


@app.get("/")
async def read_root(request: Request):
    posts = load_markdown_files("posts")
    recent_posts = sorted(
        posts.values(),
        key=lambda x: x["metadata"].get("created", datetime.min),
        reverse=True,
    )[:3]

    return templates.TemplateResponse(
        "index.html", {"request": request, "recent_posts": recent_posts}
    )


@app.get("/about")
async def read_root(request: Request):
    return templates.TemplateResponse("projects.html", {"request": request})


@app.get("/projects")
async def read_root(request: Request):
    return templates.TemplateResponse("projects.html", {"request": request})


@app.get("/contact")
async def read_root(request: Request):
    return templates.TemplateResponse("contact.html", {"request": request})


@app.get("/blog")
async def read_blog_list(request: Request):
    posts = load_markdown_files("posts")
    # sorted_posts = sorted(posts.values(), key=lambda x: x['metadata'].get('created', ''), reverse=True)
    return templates.TemplateResponse("blog.html", {"request": request, "posts": posts})


@app.get("/blog/{slug}")
async def read_blog_post(slug: str, request: Request):
    posts = load_markdown_files("posts")
    if slug not in posts:
        raise HTTPException(status_code=404, detail="Post not found")

    post = posts[slug]
    return templates.TemplateResponse(
        "blog-post.html",
        {"request": request, "post": post, "headings": post["headings"]},
    )
