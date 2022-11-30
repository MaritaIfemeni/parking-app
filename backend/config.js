//import dotenv from 'dotenv';
require('dotenv').config();
//dotenv.config();


const config = {
    db: {
      host: `${process.env.DB_HOST}`,
      user: `${process.env.DB_USER}`,
      password: `${process.env.DB_PASSWORD}`,
      database: `${process.env.DB_DATABASE}`,
    },
    listPerPage: 10,
  };
  
  module.exports = config;
  
  