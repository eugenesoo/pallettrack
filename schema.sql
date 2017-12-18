\connect postgres;

DROP DATABASE IF EXISTS pallettrack;

CREATE DATABASE pallettrack;

\connect pallettrack;

  partname VARCHAR(40) NOT NULL
);

CREATE TABLE processorder (
  processid INTEGER REFERENCES processes (processid),
  partid INTEGER REFERENCES parts(partid),
  orderid INTEGER NOT NULL 
);

CREATE TABLE pallets (
  palletid VARCHAR(40) PRIMARY KEY,
  qty INTEGER NOT NULL,
  partid INTEGER REFERENCES parts(partid),
  orderid INTEGER NOT NULL
);

INSERT INTO processes (processname) VALUES ('Milling'), ('Chamfering'), ('Tapping'), ('Tumbling (Ceramic)'), ('Brushing'), ('OD Ring Gauge');

INSERT INTO parts (partname) VALUES ('Main Shaft 7-0412R5250P');

INSERT INTO processorder (processid, partid, orderid) VALUES (1, 1, 1), (2, 1, 2), (3, 1, 3), (4, 1, 4), (5, 1, 5), (6, 1, 6);
