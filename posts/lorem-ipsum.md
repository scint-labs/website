---
name: Ut adipisicing nulla aute laborum elit eiusmod qui
summary: Adipisicing amet consequat magna cupidatat non amet proident nisi adipisicing nisi irure Lorem velit pariatur sint. Aute irure non sit in irure aliqua velit est dolore. Sit magna officia voluptate commodo dolor dolor quis irure eu eiusmod sint culpa aliqua Lorem.
category: python
created: 2023-05-30
modified:
tags:
  - scikit
  - nlp
  - ml
---

Adipisicing amet consequat magna cupidatat non amet proident nisi adipisicing nisi irure Lorem velit pariatur sint. Aute irure non sit in irure aliqua velit est dolore. Sit magna officia voluptate commodo dolor dolor quis irure eu eiusmod sint culpa aliqua Lorem. Culpa est cupidatat occaecat dolore proident dolor magna sunt nulla esse tempor quis in. Voluptate proident consectetur commodo. Ea exercitation sunt eu qui tempor cillum consequat Lorem occaecat laboris aliquip sunt commodo ea adipisicing.

Cupidatat consectetur consectetur incididunt. Cupidatat officia non esse dolor duis ipsum ea anim amet sint mollit. Consectetur aute labore deserunt nostrud sit aliquip officia. Mollit duis commodo eu consectetur minim ipsum pariatur elit officia aute magna ut anim consequat. Ut labore est amet ipsum occaecat et anim eiusmod Lorem aute. Commodo exercitation incididunt sint consequat sunt enim ad nostrud. Dolor mollit sint et velit officia reprehenderit fugiat enim ex. Consequat id occaecat consequat ea magna irure excepteur ullamco aute aliqua aliquip sunt officia sit.

## Nisi tempor duis Lorem laborum in sunt amet

In exercitation consectetur irure est aliqua ex ad mollit aliqua amet dolor sunt labore id. Ex sit cillum est. Cillum et excepteur quis anim occaecat eu labore. Tempor ex deserunt mollit velit proident ipsum laborum esse culpa exercitation mollit sit nulla non voluptate. Dolore laboris nostrud minim laboris ullamco duis pariatur exercitation amet. Proident nostrud enim consectetur id adipisicing laboris excepteur aliqua dolore est est.

Sunt laboris amet fugiat pariatur voluptate ex irure laborum nulla. Pariatur esse non do. Est magna proident aliqua aliqua officia proident id dolor aliqua. Sunt tempor aliquip cupidatat cupidatat occaecat. Cillum enim do et nisi consectetur aliqua qui ullamco aliquip occaecat ea esse consectetur.

Occaecat officia mollit in. Amet ullamco laborum velit reprehenderit consequat magna. Pariatur esse deserunt deserunt et pariatur eiusmod ullamco reprehenderit aute exercitation. Ipsum dolor nulla velit ex ut voluptate.

### Officia incididunt anim anim tempor

Mollit et exercitation ex sint ad esse ad veniam sunt enim ipsum qui. Amet aliquip enim aute incididunt cillum magna pariatur ipsum quis nisi. Tempor dolore officia exercitation proident do et. Consequat deserunt cupidatat adipisicing qui tempor fugiat elit pariatur sunt aliqua proident proident. Cillum sit culpa qui dolore. Dolore est voluptate cillum tempor incididunt id nisi commodo anim aute labore commodo ea ad. Dolor reprehenderit cillum laborum enim esse labore excepteur exercitation quis nostrud officia cupidatat deserunt aliquip.

```python
import os
import re
import subprocess

import markdown
import yaml
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request


app = FastAPI()

app.mount("/styles", StaticFiles(directory="styles"), name="styles")
app.mount("/images", StaticFiles(directory="images"), name="images")
app.mount("/templates", StaticFiles(directory="templates"), name="templates")

templates = Jinja2Templates(directory="templates")
```

Proident do ad eiusmod sunt occaecat. Reprehenderit eu exercitation ad culpa laboris sunt aute velit. Id minim non nulla sit. Sunt ipsum ex ex do consequat dolor. Pariatur consequat aliqua eu ex excepteur sint nostrud consectetur cupidatat Lorem adipisicing sit sint.

```python
def load_markdown_files(folder_path):
    posts = []
    for filename in os.listdir(folder_path):
        if filename.endswith(".md"):
            file_path = os.path.join(folder_path, filename)
            with open(file_path, "r") as file:
                content = file.read()
                parts = re.split(r"---\s*", content, 2)

                if len(parts) < 3:
                    continue

                front_matter = yaml.safe_load(parts[1])
                md_extensions = [
                    "markdown.extensions.codehilite",
                    "markdown.extensions.fenced_code",
                ]
                html = markdown.markdown(parts[2], extensions=md_extensions)
                post = {"metadata": front_matter, "content": html}
                posts.append(post)

    return posts
```

Sint quis amet voluptate adipisicing. Eiusmod dolor dolor do cupidatat pariatur magna nostrud sit et culpa eu ea irure velit fugiat. Voluptate ad proident aute est velit commodo fugiat ea quis sunt dolor. Est esse commodo magna. Nisi aliqua cillum nulla excepteur in amet nostrud laborum consequat aliquip occaecat et adipisicing ad ullamco.

```python
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
```

### Ex consequat quis sit Lorem enim amet reprehenderit

Amet proident occaecat amet ipsum laborum nostrud. Laborum Lorem commodo sint laboris. Cupidatat excepteur tempor consequat. Sit adipisicing laborum esse duis irure Lorem. Consequat mollit tempor exercitation adipisicing amet tempor. Elit dolore qui mollit enim ut tempor ipsum id. Ullamco nulla id fugiat velit eiusmod ipsum et non ullamco voluptate adipisicing ea exercitation qui. Lorem minim incididunt sit veniam.

Culpa elit Lorem ea nulla duis laboris aliqua nostrud sit mollit et. In eiusmod veniam velit enim Lorem eu incididunt.

- Eiusmod consectetur culpa velit amet cillum duis exercitation nisi ad nisi proident reprehenderit anim
- In veniam laboris aliqua anim consectetur
- elit dolore non ex incididunt ullamco velit pariatur pariatur


```python
@app.get("/")
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/projects")
async def read_root(request: Request):
    return templates.TemplateResponse("projects.html", {"request": request})


@app.get("/philosophy")
async def read_root(request: Request):
    return templates.TemplateResponse("philosophy.html", {"request": request})


@app.get("/contact")
async def read_root(request: Request):
    return templates.TemplateResponse("contact.html", {"request": request})


@app.get("/blog")
async def read_blog(request: Request):
    posts = load_markdown_files("content")  # Load blog posts from markdown files
    return templates.TemplateResponse("blog.html", {"request": request, "posts": posts})
```

Consectetur reprehenderit laboris aute magna cupidatat sit in ut ipsum sunt ad quis ea aliquip. Laborum nisi sint excepteur sint enim quis ipsum dolore eu ea laborum id sit velit. Commodo magna exercitation Lorem adipisicing pariatur laboris consectetur sint nostrud elit in quis consequat. Officia pariatur dolor id velit cupidatat sit. Lorem culpa officia aute nulla exercitation qui reprehenderit commodo aute elit voluptate. Eiusmod eiusmod exercitation et in quis sit. Aliquip aute ex aliquip ullamco nostrud pariatur velit veniam ipsum. Quis sit sit occaecat nulla deserunt.

Culpa consectetur sint velit nostrud labore pariatur. Esse dolor aute dolore qui. Labore laborum tempor deserunt sunt Lorem magna et magna nostrud qui mollit amet elit culpa cupidatat. Sunt dolore eiusmod ut et mollit exercitation nostrud.

## Aliquip amet dolore voluptate.

Cillum nulla nulla aute consequat sint adipisicing reprehenderit ex labore. Enim nostrud sunt minim ipsum voluptate nulla esse velit esse sit sint nulla culpa cillum. Cupidatat consequat veniam Lorem incididunt dolore incididunt adipisicing enim nulla pariatur sit quis eiusmod. Magna consectetur ad nisi in.

Et est quis et in do. Sint est nostrud id in officia nulla nisi exercitation consequat est ea sint. Magna et reprehenderit eiusmod in consequat exercitation est consectetur ex laboris adipisicing nisi aute duis. Pariatur eu labore pariatur deserunt commodo sint voluptate voluptate laboris et. Duis aliqua eiusmod incididunt dolor dolore laborum non adipisicing id cillum velit.