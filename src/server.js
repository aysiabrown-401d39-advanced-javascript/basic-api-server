'use strict';


// dependencies 
const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());

// middleware
const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');
const serverError = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');
const petRoutes = require('./routes/pet');
const tvRoutes = require('./routes/tv-show');
const todoRoutes = require('./routes/todo');
const productRoutes = require('./routes/products');

// using middelware
app.use(express.json());
app.use(logger);
// app.use(validator);
app.use(petRoutes);
app.use(tvRoutes);
app.use(todoRoutes);
app.use(productRoutes);


// setting up page not found & error handling 
app.use('*', notFoundHandler);
app.use(serverError);


// exporting server listening 
module.exports = {
    server: app,
    start: port => {
        if(!port) {
            throw new Error('missing port');
        }
        app.listen(port, () => { console.log('listening on: ', port)})
    }
}