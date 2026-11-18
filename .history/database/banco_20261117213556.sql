CREATE DATABASE IF NOT EXISTS controle_embalagens;
USE controle_embalagens;

CREATE TABLE IF NOT EXISTS embalagem (
    id_embalagem INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(150) NOT NULL,
    material VARCHAR(100) NOT NULL,
    capacidade VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_ensaio)
);

CREATE TABLE IF NOT EXISTS maquina (
    id_maquina INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    patrimonio VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_equipamento)
);

CREATE TABLE IF NOT EXISTS operador (
    id_operador INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    matricula VARCHAR(50) NOT NULL,
    turno VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_analista)
);