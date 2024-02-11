var pool = createPool({
    host: "localhost",
    user: "root",
    password: config,
    database: "test",
    connectionLimit: 10
})

var result = pool.query('select * from first_table', (err, result, fields) =>{
    if(err){
        console.log(err);
        return err;
    }
    console.log(result);
    return result;
})


module.exports = {
    pool
};