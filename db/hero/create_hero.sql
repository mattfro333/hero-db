/*Insert a new hero into the Hero Table*/
INSERT INTO Hero
(name, origin, hometown, imageUrl)
VALUES
($1, $2, $3, $4)
RETURNING *;
