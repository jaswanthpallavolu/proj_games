const express = require('express');
const app = express();

app.use(express.static(__dirname + '/pages'));



app.get('',(req,res)=>{
    res.sendFile(__dirname + '/pages/index.html');
});

let port = process.env.PORT || 5000;
app.listen(port, ()=> console.log('port at '+port+'.......'));
