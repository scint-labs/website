import subprocess
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request

app = FastAPI()

app.mount("/styles", StaticFiles(directory="styles"), name="styles")
app.mount("/images", StaticFiles(directory="images"), name="images")
app.mount("/templates", StaticFiles(directory="templates"), name="templates")

templates = Jinja2Templates(directory="templates")


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
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/product")
async def read_root(request: Request):
    return templates.TemplateResponse("product.html", {"request": request})


@app.get("/features")
async def read_root(request: Request):
    return templates.TemplateResponse("features.html", {"request": request})


@app.get("/company")
async def read_root(request: Request):
    return templates.TemplateResponse("company.html", {"request": request})


@app.get("/blog")
async def read_root(request: Request):
    return templates.TemplateResponse("blog.html", {"request": request})


@app.get("/get-started")
async def read_root(request: Request):
    return templates.TemplateResponse("get-started.html", {"request": request})
