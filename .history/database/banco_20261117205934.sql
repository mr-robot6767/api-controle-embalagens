CREATE DATABASE IF NOT EXISTS controle_embalagens;
USE api_laboratorio_ensaios;

CREATE TABLE IF NOT EXISTS ensaio (
    id_ensaio INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    norma VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_ensaio)
);

CREATE TABLE IF NOT EXISTS equipamento (
    id_equipamento INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    patrimonio VARCHAR(50) NOT NULL,
    situacao VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_equipamento)
);

CREATE TABLE IF NOT EXISTS analista (
    id_analista INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    registro VARCHAR(50) NOT NULL,
    especialidade VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_analista)
);
