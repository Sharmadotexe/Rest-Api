const express = require('express');
const users = require('./mock_data.json')

const app = express();

const PORT = 8000;



//routes
app.get('/users', (req,res)=>{
    return res.json(users)
})

  

app.listen(PORT, ()=> console.log(`server started at port number:${PORT}`))
