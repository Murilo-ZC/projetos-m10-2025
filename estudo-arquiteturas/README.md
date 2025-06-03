# Proposta de Estudo de Arquitetura de Sistemas

Pessoal, aqui vamos analisar um sistema em conjunto e como podemos fazer sua implementação utilizando uma abordgem monolítica e com microserviços.

Nosso objetivo aqui será modelar um sistema que controle o login dos usuários e suas anotações. Vamos trabalhar com elas como um texto simples e vamos utilizar como banco de dados, o SQLite para realizar esse desenvolvimento.

## Para Iniciarmos

Primeiro, vamos pensar em como podemos elaborar a proposta de arquitetura do nosso sistema. Nosso banco vai ser construído utilizando o seguinte SQL:

```sql
-- Criação da tabela de usuários
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
);

-- Criação da tabela de notas
CREATE TABLE notas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    texto TEXT NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Inserção de usuários de exemplo
INSERT INTO usuarios (nome, email, senha) VALUES
('Ana Silva', 'ana@email.com', 'senha123'),
('Bruno Souza', 'bruno@email.com', 'senha456');

-- Inserção de notas de exemplo
INSERT INTO notas (usuario_id, texto) VALUES
(1, 'Primeira anotação da Ana'),
(1, 'Segunda anotação da Ana'),
(2, 'Anotação do Bruno'); 
```

Para criar o banco, rodar o script `cria_banco.py`:

```python
# cria_banco.py
import sqlite3

# Caminhos dos arquivos
SQL_FILE = 'init_db.sql'
DB_FILE = 'banco.db'

# Conecta ao banco (cria se não existir)
conn = sqlite3.connect(DB_FILE)
cursor = conn.cursor()

# Lê o SQL do arquivo
with open(SQL_FILE, 'r', encoding='utf-8') as f:
    sql_script = f.read()

# Executa o script SQL
cursor.executescript(sql_script)

# Salva e fecha
conn.commit()
conn.close()

print(f'Banco de dados "{DB_FILE}" criado e populado com sucesso!') 
```

Legal, agora temos nosso banco criado e vamos iniciar o desenvolvimento da nossa aplicação. O nosso objetivo é criar uma solução monolítica para a utilização do sistema e uma solução com microsserviços.

Vamos utilizar código em Python e GoLang. Além disso, vamos utilizar o Docker para testar algumas características da nossa aplicação.

## Criando o Monolíto

O monolíto pode ser implementado em qualquer linguagem, mas deve estar em grau de maturidade 2 (Richardson).


## Criando Microsserviços

Os microsserviços podem ser implementados em uma linguagem só ou em diversas. Separar entre serviço de autenticação e de dados.