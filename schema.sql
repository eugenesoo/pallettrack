DROP DATABASE IF EXISTS pallettrack;

CREATE DATABASE pallettrack;

USE pallettrack;

CREATE TABLE processes (
  processid SERIAL PRIMARY KEY,
  processname VARCHAR(256) NOT NULL
);

CREATE TABLE parts (
  partid SERIAL PRIMARY KEY,
  partname VARCHAR(40) NOT NULL
);

CREATE TABLE processorder (
  processid foreign key reference,
  partid foreign key reference,
  order
);
