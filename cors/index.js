const express = require("express");
const cors = require("cors");
const app = express();
const port = 3003;
app.use(cors());
app.use(express.json());
app.post("/sum", function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        "answer" : a+b
    })
    console.log(a+b);
})

app.listen(port);