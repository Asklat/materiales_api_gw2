const dotenv = require('dotenv').config();
module.exports = {
  //GLOBAL
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  //BBDD
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  BDNAME: process.env.BDNAME
}