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