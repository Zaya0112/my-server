const express = require("express");

const port = 1000;
const myServer = express();

myServer.use(express.json());

myServer.get('/',(request,response)=>{
    
    response.json({text:"hello"});
});
myServer,get("/about",(request,response)=>{
    response.send("This is about route");
});
myServer.get("/about",(request,response)=>{
    const{id}=request.params;
    for (let i=0; i<usersJson.lenght;i++){
       if (usersJson[i].id==id){
        response.send("USer found"+JSON.stringify(userJson[i]));
       }
    }

});

myServer.listen(port, () => {
    console.log = ("My server running!");
});