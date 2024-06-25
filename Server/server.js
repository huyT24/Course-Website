'use strict';

const express = require('express');
const app = express();

app.get('/index.html', (req, res) => {
    
})

const PORT = process.env.PORT || 8000;
app.listen(PORT);