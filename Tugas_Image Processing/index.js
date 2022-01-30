const express = require('express');
const cors = require('cors');

const app = express();  
app.use(cors())

app.use(express.static('public'));

app.listen(5000,() => {
    console.log(`Server up on http://localhost:${5000}`)
})