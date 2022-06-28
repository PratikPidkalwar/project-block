const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://chetan1297:9JBxn4iQEY3rMnB@cluster0.gi2f1j9.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

// app.use(
//     function(req, res, next) {
//         console.log("inside GLOBAL MW");
//         next();
//     }
// );

app.use('/', route);


app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});