const {instituteDB} = require('../utils/db');

async function add({name, phone}) {
    const db = await instituteDB();
    const student = db.collection("student");
    try {
        await student.insertOne({name, phone});   
        return {name, phone};
    }
    catch (err) {
        return 'Na ho paega'
    }
}

module.exports = {add}