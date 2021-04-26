CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100),
  hash VARCHAR(3000)
);

CREATE TABLE product (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100),
  product_price NUMERIC,
  product_tier INTEGER,
  description TEXT
); 

CREATE TABLE cart (
  cart_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE cart_items (
  cart_items_id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES cart(cart_id),
  product_id INTEGER REFERENCES product(product_id)
);

INSERT INTO product
(product_name, product_price, description)
VALUES
($1, $2, $3);

