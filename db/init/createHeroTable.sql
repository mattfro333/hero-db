/* Create Table It does Not Exist */
CREATE TABLE IF NOT EXISTS Hero(
  heroId SERIAL PRIMARY KEY,
  name VARCHAR(50),
  origin VARCHAR(50),
  hometown VARCHAR(50),
  imageUrl VARCHAR(400)
)
