const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://aman:vnuGXtV6IPia4E2A@cluster0.tfrr4.mongodb.net/institue?retryWrites=true&w=majority";

async function connectMongo() {
    let client = new MongoClient(uri);
    await client.connect();
    return client;
}

async function getDB() {
    const client = await connectMongo();
    return client.db("institute");
}

module.exports = {instituteDB: getDB, connectMongo};