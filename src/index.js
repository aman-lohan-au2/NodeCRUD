const express = require('express');
const router = require('./router')
const app = express();
const bodyParser = require('body-parser')
const {connectMongo} = require('./utils/db')
const PORT = 8000;


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

async function main() {
    await connectMongo();

    app.use('/api', router);
    app.get('*', (req, res) => {
        res.send('Nothing Here')
    });




    app.listen(PORT, (err, req, res, next) => { 
        if(err) 
            console.log('Ouch! Something went wrong')  
        console.log(`server listen on port: ${PORT}`)
    })
}


main()