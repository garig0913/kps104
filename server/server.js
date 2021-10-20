const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bp = require('body-parser');
const app = express();

const userRouter = require('./routes/userRouter');


app.use(cors());
app.use(bp.json())
app.use(bp.urlencoded({extended: false}))

app.use(userRouter)

mongoose.connect('mongodb://localhost:27017/react')
    .then(result => {
        app.listen(3001, () => {
            console.log('server started on port 3001')
        })
    })
    .catch(err => console.log(err))