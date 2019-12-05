export const createUser = `
INSERT INTO users 
(firstname,lastname,phone_number,address, password)
VALUES
($1, $2, $3, $4, $5)
RETURNING 
id, firstname, lastname, phone_number, address
`;

export const getUser = `
SELECT firstname, lastname, phone_number from users
WHERE 
id=$1 
`;

export const updateUser=`
UPDATE users 
SET bvn=$2, dob=$3
WHERE 
phone_number=$1
RETURNING
id, firstname, lastname, phone_number
`;