const studentServices = require('../service/student')

async function add(req, res) {
    const {name, phone} = req.body; // const name = req.body.name
    const result = await studentServices.add({name, phone});
    res.send({msg: result});
}

module.exports = {add}