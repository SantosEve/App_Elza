CREATE TABLE Usuarios(
    id INT PRIMARY KEY,
    name VARCHAR(100),
    cpf VARCHAR(15) UNIQUE,
    email VARCHAR(100),
    senha_hash varchar(64),
    data_nascimento DATE
);

INSERT INTO Usuarios(id,name,email) VALUES(
    1,
    "Victor Lima",
    "email@teste.com"
);
INSERT INTO Usuarios (id,name, cpf, data_nascimento, senha_hash) VALUES(
    2,
    'João Silva',
    '12345678901',
    '1990-05-15', 
    'hash_gerado_aqui'
);

--Em vez de armazenar a senha diretamente, armazene o hash da senha.
-- Isso ajuda a proteger as senhas em caso de violação de segurança, 
--pois o hash é mais difícil de reverter para a senha original.

-- O MySQL, por exemplo, fornece funções de hash como SHA2() que podem 
--ser usadas para gerar hashes seguros.