DROP DATABASE IF EXISTS culture1;

CREATE DATABASE culture1;

\c culture1;

CREATE TABLE IF NOT EXISTS images (
  img_id serial primary key,
  img_url varchar(300),
  last_modified date,
  is_foaming varchar(100)
);