CREATE TABLE referencepreference (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    age SMALLINT NOT NULL,
    area VARCHAR(20)
);
GRANT ALL ON referencepreference TO yixuan;
GRANT ALL ON referencepreference_id_seq TO yixuan;

DROP TABLE referencepreference;

INSERT INTO referencepreference(firstName, lastName, email, age) VALUES ('Yixuan', 'Wu', 'yixuan@wu.ch', '25');