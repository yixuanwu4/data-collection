\c datacollection

DROP TABLE referencepreference;

CREATE TABLE referencepreference (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    age SMALLINT NOT NULL,
    area VARCHAR(20),
    education VARCHAR(20),
    acceptance1 VARCHAR(3),
    reference1 VARCHAR(100),
    acceptance2 VARCHAR(3),
    reference2 VARCHAR(100),
    acceptance3 VARCHAR(3),
    reference3 VARCHAR(100),
    acceptance4 VARCHAR(3),
    reference4 VARCHAR(100),
    acceptance5 VARCHAR(3),
    reference5 VARCHAR(100),
    acceptance6 VARCHAR(3),
    reference6 VARCHAR(100),
    acceptance7 VARCHAR(3),
    reference7 VARCHAR(100),
    acceptance8 VARCHAR(3),
    reference8 VARCHAR(100),
    acceptance9 VARCHAR(3),
    reference9 VARCHAR(100),
    acceptance10 VARCHAR(3),
    reference10 VARCHAR(100)
);
GRANT ALL ON referencepreference TO yixuan;
GRANT ALL ON referencepreference_id_seq TO yixuan;



INSERT INTO referencepreference(firstName, lastName, email, age, education, acceptance1, reference1, acceptance2, reference2, acceptance3, reference3, acceptance4, reference4, acceptance5, reference5, acceptance6, reference6, acceptance7, reference7, acceptance8, reference8, acceptance9, reference9, acceptance10, reference10) VALUES ('Yixuan', 'Wu', 'yixuan@wu.ch', '25', 'Master', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26');