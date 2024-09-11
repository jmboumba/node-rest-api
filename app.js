const express = require('express');
const app = express ();

app.use(express.json());


//define the port 
const PORT = process.env.PORT || 3000;

app.get('/status', (request, response) => {
    const status = {
       'Status': 'Running'
    };
    
    response.send(status);
 });

 app.get('/user', (request, response) => {
    const user = {
        firstname: "Junior Melcki", 
        lastname: "MBOUMBA MOUSSAVOU"
    }
    response.send(user)
 })

 app.post('/user', (request, response) => {
    var user = {
        name:""
    };

    user.name = request.body.name;

    response.send(user.name);
 })

//app listining 
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });