from flask import Flask, request, jsonify

app = Flask(__name__)

banco = []

@app.route("/", methods=['GET'])
def hello_world():
    return "Hello, world."

@app.route("/user", methods=['POST'])
def criaUsuario():
    print(request.json)
    banco.append(request.json)
    return "OK"

@app.route("/user", methods=['GET'])
def pegarUsuarios():
    return jsonify(banco)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)