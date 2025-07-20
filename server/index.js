const express = require("express");
const app = express();


app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    console.log("Reqest on /")
    res.send("Hello, World!");
})

app.listen(5000,()=>{
    console.log("Server started");
});

