DROP TABLE favorite_list, users, products;


CREATE TABLE users(
id serial primary key,
username varchar(20) unique,
password varchar(50)
);
CREATE TABLE products(
id serial primary key,
current_price integer,
one_month_price integer,
six_month_price integer,
one_year_price integer,
five_year_price decimal(8,2),
max_price integer
);
CREATE TABLE favorite_list(
id serial primary key,
user_id integer,
products_id integer
);
ALTER TABLE favorite_list ADD FOREIGN KEY(user_id) references users (id);
ALTER TABLE favorite_list ADD FOREIGN KEY(products_id) references products (id);

INSERT INTO users(username, password)
VALUES ('Nobody', 'password123')

