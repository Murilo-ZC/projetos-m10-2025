from flask import Flask, request, jsonify
from db import get_db, init_db, close_db

app = Flask(__name__)

@app.teardown_appcontext
def teardown_db(exception):
    close_db(exception)

# CRUD Usuários
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    db = get_db()
    cursor = db.cursor()
    cursor.execute('INSERT INTO users (nome, email) VALUES (?, ?)', (data['nome'], data['email']))
    db.commit()
    return jsonify({'id': cursor.lastrowid, 'nome': data['nome'], 'email': data['email']}), 201

@app.route('/users', methods=['GET'])
def list_users():
    db = get_db()
    users = db.execute('SELECT id, nome, email FROM users').fetchall()
    return jsonify([{'id': u[0], 'nome': u[1], 'email': u[2]} for u in users])

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    db = get_db()
    user = db.execute('SELECT id, nome, email FROM users WHERE id = ?', (user_id,)).fetchone()
    if user:
        return jsonify({'id': user[0], 'nome': user[1], 'email': user[2]})
    return jsonify({'error': 'User not found'}), 404

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    db = get_db()
    db.execute('UPDATE users SET nome = ?, email = ? WHERE id = ?', (data['nome'], data['email'], user_id))
    db.commit()
    return jsonify({'id': user_id, 'nome': data['nome'], 'email': data['email']})

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    db = get_db()
    db.execute('DELETE FROM users WHERE id = ?', (user_id,))
    db.commit()
    return '', 204

# CRUD Posts
@app.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    db = get_db()
    cursor = db.cursor()
    cursor.execute('INSERT INTO posts (titulo, texto, user_id) VALUES (?, ?, ?)', (data['titulo'], data['texto'], data['user_id']))
    db.commit()
    return jsonify({'id': cursor.lastrowid, 'titulo': data['titulo'], 'texto': data['texto'], 'user_id': data['user_id']}), 201

@app.route('/posts', methods=['GET'])
def list_posts():
    db = get_db()
    posts = db.execute('SELECT id, titulo, texto, user_id FROM posts').fetchall()
    return jsonify([{'id': p[0], 'titulo': p[1], 'texto': p[2], 'user_id': p[3]} for p in posts])

@app.route('/posts/<int:post_id>', methods=['GET'])
def get_post(post_id):
    db = get_db()
    post = db.execute('SELECT id, titulo, texto, user_id FROM posts WHERE id = ?', (post_id,)).fetchone()
    if post:
        return jsonify({'id': post[0], 'titulo': post[1], 'texto': post[2], 'user_id': post[3]})
    return jsonify({'error': 'Post not found'}), 404

@app.route('/posts/<int:post_id>', methods=['PUT'])
def update_post(post_id):
    data = request.get_json()
    db = get_db()
    db.execute('UPDATE posts SET titulo = ?, texto = ?, user_id = ? WHERE id = ?', (data['titulo'], data['texto'], data['user_id'], post_id))
    db.commit()
    return jsonify({'id': post_id, 'titulo': data['titulo'], 'texto': data['texto'], 'user_id': data['user_id']})

@app.route('/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    db = get_db()
    db.execute('DELETE FROM posts WHERE id = ?', (post_id,))
    db.commit()
    return '', 204

if __name__ == '__main__':
    with app.app_context():
        init_db()
    app.run(debug=True, host='0.0.0.0', port=5000)
