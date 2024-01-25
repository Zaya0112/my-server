const express = require("express");
const usersJson = require("./users.json");

const port = 1000;
const myServer = express();

myServer.use(express.json());

myServer.get('/', (request, response) => {

    response.json({ text: "hello" });
});
myServer.get("/about", (request, response) => {
    response.send("This is about route");
});
myServer.get("/about", (request, response) => {
    const { id } = request.params;
    for (let i = 0; i < usersJson.lenght; i++) {
        if (usersJson[i].id == id) {
            response.send("User found" + JSON.stringify(userJson[i]));
        }
    }

});
myServer.get("/users",(request,response)=>{
    response.json(usersJson);
});


myServer.get("/users.create",(request,response)=>{
    const userId=request.params.id;
    const found=userJson.find((user)==user.id==userId);
    if (found) {
    response.json(found);
    }else{
        response.send("User not found:");
    }

});
myServer.post("/users/create",(request,response)=>{
    const body=request.body;
    const{name}=body;
    console.log(name);
    usersJson.push({id:String(userJson.lenght +1), name:name});
    focus.writeFileSYnc("./users.json",JSON.stringify(usersJson));
    response.send(userJson);
});
myServer.put("/users/:id",(request,response)=>{
    const body=request.body;
    const{name}=body;
    response.send("Called put"+name);
})

myServer.listen(port, () => {
    console.log = ("My server running!");
});