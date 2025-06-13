import pytest
from myapp import create_app, db as _db
from flask import url_for
from datetime import date

@pytest.fixture(scope="session")
def app():
    """Cria uma instância do Flask para testes."""
    app = create_app(testing=True)
    with app.app_context():
        yield app

@pytest.fixture(scope="session")
def db(app):
    """Configura o banco de testes e limpa ao final."""
    _db.create_all()
    yield _db
    _db.drop_all()

@pytest.fixture
def client(app, db):
    """Retorna um cliente HTTP para fazer requisições ao app."""
    return app.test_client()

@pytest.fixture
def auth_header(client):
    """Supondo que haja endpoint de login, obtém token JWT."""
    resp = client.post(
        url_for("auth.login"),
        json={"username": "testuser", "password": "testpass"}
    )
    token = resp.get_json()["access_token"]
    return {"Authorization": f"Bearer {token}"}


## RF1

def test_cadastrar_cardapio_com_sucesso(client, auth_header):
    payload = {
        "alimento": "Arroz Integral",
        "categoria": "guarnicao",
        "dataServico": date.today().isoformat(),
        "restricoes": ["gluten", "lactose"]
    }
    resp = client.post(
        "/api/cardapios",
        json=payload,
        headers=auth_header
    )
    assert resp.status_code == 201
    data = resp.get_json()
    # Verifica campos de entrada
    assert data["alimento"] == payload["alimento"]
    assert data["categoria"] == payload["categoria"]
    assert data["dataServico"] == payload["dataServico"]
    assert isinstance(data["restricoes"], list)
    # Metadados
    assert "created_at" in data
    assert "created_by" in data


