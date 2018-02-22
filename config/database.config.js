require('dotenv').config({ path: './variables.env' });

module.exports = {
    url: process.env.DB_STRING_LOCAL
}