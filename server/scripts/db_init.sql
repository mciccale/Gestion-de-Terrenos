-- Creamos la DB si no existe
SELECT 'CREATE DATABASE gestion_terrenos_db' 
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'gestion_terrenos_db')\gexec
-- Nos conectamos a la base de datos
\c gestion_terrenos_db;
-- Creamos la tabla terrenos
CREATE TABLE IF NOT EXISTS terrenos (
    id SERIAL PRIMARY KEY,
    tipo_terreno VARCHAR(25)  NOT NULL,
    ubicacion VARCHAR(255) NOT NULL,
    hectareas FLOAT NOT NULL,
    limites POINT[4] NOT NULL,
    UNIQUE (id),
    CHECK (tipo_terreno IN ('finca', 'latifundio'))
);
-- Creamos la tabla arrendatarios
CREATE TABLE IF NOT EXISTS arrendatarios (
    dni VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(50)  NOT NULL,
    edad INT,
    sexo CHAR,
    fincas_alquiladas INT[],
    parcelas_alquiladas INT[],
    UNIQUE (dni)
);
-- Creamos la tabla fincas
CREATE TABLE IF NOT EXISTS fincas (
    terreno_id INT PRIMARY KEY,
    tipo_finca VARCHAR(25)  NOT NULL,
    alquilada BOOLEAN NOT NULL,
    fecha_inicio_alquiler DATE,
    periodo_arrendamiento INT,
    importe_alquiler FLOAT,
    dni_arrendatario VARCHAR(20),
    FOREIGN KEY (terreno_id) REFERENCES terrenos(id) ON DELETE CASCADE,
    FOREIGN KEY (dni_arrendatario) REFERENCES arrendatarios(dni) ON DELETE SET NULL,
    CHECK (tipo_finca IN ('avicola', 'ganadera'))
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
    ubicacion VARCHAR(255) NOT NULL,
    hectareas FLOAT NOT NULL,
    limites POINT[4] NOT NULL,
    UNIQUE (id),
    FOREIGN KEY (terreno_id) REFERENCES terrenos(id) ON DELETE CASCADE, --REVISAR, podría ser de latifundio
    FOREIGN KEY (dni_arrendatario) REFERENCES arrendatarios(dni) ON DELETE SET NULL
);
-- Creamos la tabla latifundios
CREATE TABLE IF NOT EXISTS latifundios (
    terreno_id INT,
    parcela_id INT,
    PRIMARY KEY (terreno_id, parcela_id),
    FOREIGN KEY (terreno_id) REFERENCES terrenos(id) ON DELETE CASCADE,
    FOREIGN KEY (parcela_id) REFERENCES parcelas(id) ON DELETE CASCADE
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

INSERT INTO terrenos(tipo_terreno, ubicacion, hectareas, limites) VALUES('latifundio','Comunidad de Madrid', 100, ARRAY[POINT(0,0),POINT(0,10),POINT(10,0),POINT(10,10)]);
INSERT INTO parcelas(terreno_id, alquilada, fecha_inicio_alquiler, periodo_arrendamiento, importe_alquiler, dni_arrendatario, ubicacion, hectareas, limites) VALUES(1,false,NULL,NULL,NULL,NULL,'Mostoles', 10, ARRAY[POINT(1,1),POINT(1,1),POINT(1,1),POINT(1,1)]);
INSERT INTO parcelas(terreno_id, alquilada, fecha_inicio_alquiler, periodo_arrendamiento, importe_alquiler, dni_arrendatario, ubicacion, hectareas, limites) VALUES(1,false,NULL,NULL,NULL,NULL,'Navalcarnero', 10, ARRAY[POINT(2,2),POINT(2,2),POINT(2,2),POINT(2,2)]);
INSERT INTO latifundios(terreno_id, parcela_id) VALUES (1, 1);
INSERT INTO latifundios(terreno_id, parcela_id) VALUES (1, 2);
INSERT INTO terrenos(tipo_terreno, ubicacion, hectareas, limites) VALUES('finca', 'Castilla La Mancha', 1000, ARRAY[POINT(-10,-10),POINT(3.55,3.41),POINT(400,-15),POINT(15.22,42.1)]);
INSERT INTO fincas(terreno_id, tipo_finca, alquilada, fecha_inicio_alquiler, periodo_arrendamiento, importe_alquiler, dni_arrendatario) VALUES (2, 'ganadera', false, NULL, NULL, NULL, NULL);
INSERT INTO terrenos(tipo_terreno, ubicacion, hectareas, limites) VALUES('finca','Castilla La Mancha', 500, ARRAY[POINT(-3,-40),POINT(3.55,3.41),POINT(2.55,-5),POINT(15.22,42.1)]);
INSERT INTO fincas(terreno_id, tipo_finca, alquilada, fecha_inicio_alquiler, periodo_arrendamiento, importe_alquiler, dni_arrendatario) VALUES (3, 'avicola', false, NULL, NULL, NULL, NULL);