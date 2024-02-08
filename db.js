const express =  require("express")
const { config } = require('./config.js')
const userName = require('./index.js')


const {
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: config,
    database: "test",
    connectionLimit: 10
})

pool.query('select * from first_table', (err, result, fields) =>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})



