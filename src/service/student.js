const studentRepo = require('../repository/student')

async function add(arr) {
    const result = await studentRepo.add(arr);
    return result;
}

module.exports = {add}