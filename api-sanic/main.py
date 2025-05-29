from sanic import Sanic
from sanic.response import text,json

app = Sanic("MyHelloWorldApp")

banco = []

@app.get("/")
async def hello_world(request):
    return text("Hello, world.")

@app.post("/user")
async def criaUsuario(request):
    print(request.json)
    banco.append(request.json)
    return text("OK")

@app.get("/user")
async def pegarUsuarios(request):
    return json(banco)

