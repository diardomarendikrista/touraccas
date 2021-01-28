const bcrypt = require('bcryptjs');

const hashing = (pass => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(pass, salt);
  return hash;
})

const compare = (inputPassword, passwordDb) => {
  const result = bcrypt.compareSync(inputPassword, passwordDb);
  return result;
}

module.exports = { hashing, compare }