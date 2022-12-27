BEGIN;

DROP TABLE IF EXISTS users, paymentInfo, products CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  type TEXT,  -- airpods, iphones, ipads
  product TEXT,
  model TEXT,
  image TEXT,
  description TEXT, 
  price VARCHAR (255)
);
CREATE TABLE orderHistory(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  order_date timestamp,
  
)




INSERT INTO users (username, email, password) VALUES ('aa', 'a@a', '123');
COMMIT;

-- INSERT INTO reviews (user_id, Review, postDate) VALUES (1, 'random', now());