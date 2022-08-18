create database if not exists ada_db;
use ada_db;

CREATE TABLE IF NOT EXISTS ada_db.cards (
  id VARCHAR(100) NOT NULL,
  title VARCHAR(50) NOT NULL,
  content VARCHAR(255) NOT NULL,
  list VARCHAR(30) NOT NULL,
  createdAt DATETIME NOT NULL,
  updateAt DATETIME NULL,
  PRIMARY KEY (id)
);