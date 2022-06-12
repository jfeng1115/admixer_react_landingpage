CREATE TABLE signups (
    ID SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL
);

INSERT INTO signups (email)
VALUES  ('jfeng_first_test@gmail.com');
