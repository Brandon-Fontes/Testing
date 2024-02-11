import 'express';
//const { Pool } = require('undici-types');
import { config } from './config.js';
import { createPool } from 'mysql';
import inquirer from 'inquirer';
import './db.js';




 
function promptMe() {
    var userAdjective = prompt("What is your username");
    alert (userAdjective);
    console.log(userAdjective);
    pool.query('insert into first_table (user_id) values ('+ userAdjective +')', (err, result, fields) =>{
        if(err){
            return console.log(err);
        }
        return console.log(result);
    })
}



