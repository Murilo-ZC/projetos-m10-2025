# Monolito em Flask

Este projeto implementa a solução monolítica para o sistema de login e anotações, utilizando Flask e SQLite.

## Como rodar

1. Instale as dependências:
   ```sh
   pip install -r requirements.txt
   ```
2. Certifique-se de que o arquivo `banco.db` está presente (pode ser criado com o script `cria_banco.py` do diretório anterior).
3. Execute a aplicação:
   ```sh
   flask --app app run
   ```

## Funcionalidades
- Cadastro e login de usuários
- CRUD de anotações

## Estrutura
- `app.py`: aplicação principal Flask
- `models.py`: modelos de dados
- `database.py`: conexão com o banco 