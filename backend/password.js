const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for hashing

const plainPassword = '1234';
const hashedPassword = bcrypt.hashSync(plainPassword, saltRounds);


console.log(hashedPassword)
