const { MongoClient } = require ('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb+srv://brandonjfontes:WZNhnT2VPMT7mJLH@cluster0.ohfwvk2.mongodb.net/')
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}

