-- Creamos la DB si no existe
SELECT 'CREATE DATABASE gestion_terrenos_db' 
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'gestion_terrenos_db')\gexec
-- Nos conectamos a la base de datos
\c gestion_terrenos_db;
-- Creamos la tabla terrenos
CREATE TABLE IF NOT EXISTS terrenos (
    id SERIAL PRIMARY KEY,
    ubicacion VARCHAR(255),
    hectareas FLOAT,
    limites POINT[],
    UNIQUE (id)
);
-- Creamos la tabla fincas
CREATE TABLE IF NOT EXISTS fincas (
    terreno_id INT PRIMARY KEY,
    tipo_finca VARCHAR(25),
    alquilada BOOLEAN,
    fecha_inicio_alquiler DATE,
    periodo_arrendamiento INT,
    importe_alquiler FLOAT,
    dni_arrendatario VARCHAR(20),
    FOREIGN KEY (terreno_id) REFERENCES terrenos(id),
    FOREIGN KEY (dni_arrendatario) REFERENCES arrendatarios(dni),
    CHECK (tipo_finca IN ('avícola', 'ganadera'))
);
-- Creamos la tabla latifundios
CREATE TABLE IF NOT EXISTS latifundios (
    parcelas_id INT[]
);
-- Creamos la tabla parcelas
CREATE TABLE IF NOT EXISTS parcelas (
    id SERIAL PRIMARY KEY,
    terreno_id INT,
    alquilada BOOLEAN,
    fecha_inicio_alquiler DATE,
    periodo_arrendamiento INT,
    importe_alquiler FLOAT,
    dni_arrendatario VARCHAR(20),
    UNIQUE (id),
    FOREIGN KEY (terreno_id) REFERENCES terrenos(id),
    FOREIGN KEY (dni_arrendatario) REFERENCES arrendatarios(dni)
);
-- Creamos la tabla arrendatarios
CREATE TABLE IF NOT EXISTS arrendatarios (
    dni VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT,
    sexo CHAR,
    fincas_alquiladas INT[],
    parcelas_alquiladas INT[],
    UNIQUE (dni)
);
-- Creamos la tabla recibos
CREATE TABLE IF NOT EXISTS recibos (
    id SERIAL PRIMARY KEY,
    finca_id INT,
    parcela_id INT,
    fecha_emision DATE,
    tipo_alquiler VARCHAR(25),
    importe FLOAT,
    iva FLOAT,
    irpf FLOAT,
    pagado BOOLEAN,
    UNIQUE (id),
    FOREIGN KEY (finca_id) REFERENCES terrenos(id),
    FOREIGN KEY (parcela_id) REFERENCES parcelas(id)
);
