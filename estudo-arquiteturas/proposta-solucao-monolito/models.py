from werkzeug.security import check_password_hash
from database import get_db

class Usuario:
    @staticmethod
    def buscar_por_email(email):
        db = get_db()
        user = db.execute('SELECT * FROM usuarios WHERE email = ?', (email,)).fetchone()
        return user

    @staticmethod
    def validar_login(email, senha):
        user = Usuario.buscar_por_email(email)
        if user and user['senha'] == senha:
            return user
        return None

class Nota:
    @staticmethod
    def listar_por_usuario(usuario_id):
        db = get_db()
        return db.execute('SELECT * FROM notas WHERE usuario_id = ?', (usuario_id,)).fetchall()

    @staticmethod
    def criar(usuario_id, texto):
        db = get_db()
        db.execute('INSERT INTO notas (usuario_id, texto) VALUES (?, ?)', (usuario_id, texto))
        db.commit()

    @staticmethod
    def deletar(nota_id, usuario_id):
        db = get_db()
        db.execute('DELETE FROM notas WHERE id = ? AND usuario_id = ?', (nota_id, usuario_id))
        db.commit() 