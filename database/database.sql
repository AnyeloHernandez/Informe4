CREATE DATABASE ng_login_db;

USE ng_login_db;

CREATE TABLE login(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(20) NOT NULL,
    contrasenna VARCHAR(20) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE login;

USE ng_login_db;

CREATE TABLE publicaciones(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(20) NOT NULL,
    curso VARCHAR(100) NOT NULL,
    catedratico VARCHAR(100) NOT NULL,
    mensaje VARCHAR(256),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE publicaciones;