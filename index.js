const express = require('express');
const app = express();

app.use(express.static(__dirname + '/pages'));

app.get('',(req,res)=>{
    res.sendFile(__dirname + '/pages/main.html');
});

let port = process.env.PORT || 4000;
app.listen(port, ()=> console.log('port at '+port+'.......'));
