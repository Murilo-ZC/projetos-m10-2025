from flask import Flask, request, session, jsonify
from models import Usuario, Nota
from database import close_connection

app = Flask(__name__)
app.secret_key = 'supersecretkey'

@app.teardown_appcontext
def teardown_db(exception):
    close_connection(exception)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = Usuario.validar_login(data['email'], data['senha'])
    if user:
        session['user_id'] = user['id']
        return jsonify({'message': 'Login realizado com sucesso!'}), 200
    return jsonify({'message': 'Credenciais inválidas'}), 401

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return jsonify({'message': 'Logout realizado com sucesso!'})

@app.route('/notas', methods=['GET'])
def listar_notas():
    if 'user_id' not in session:
        return jsonify({'message': 'Não autenticado'}), 401
    notas = Nota.listar_por_usuario(session['user_id'])
    return jsonify([{'id': n['id'], 'texto': n['texto'], 'data_criacao': n['data_criacao']} for n in notas])

@app.route('/notas', methods=['POST'])
def criar_nota():
    if 'user_id' not in session:
        return jsonify({'message': 'Não autenticado'}), 401
    data = request.json
    Nota.criar(session['user_id'], data['texto'])
    return jsonify({'message': 'Nota criada com sucesso!'}), 201

@app.route('/notas/<int:nota_id>', methods=['DELETE'])
def deletar_nota(nota_id):
    if 'user_id' not in session:
        return jsonify({'message': 'Não autenticado'}), 401
    Nota.deletar(nota_id, session['user_id'])
    return jsonify({'message': 'Nota deletada com sucesso!'})

if __name__ == '__main__':
    app.run(debug=True) 