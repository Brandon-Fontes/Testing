const express = require('express');
const config = require('./config.js');

function promptMe(){
    var userAdjective = prompt("What is your username");
    alert (userAdjective);
    console.log(userAdjective);
}
