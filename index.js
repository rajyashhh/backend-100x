const express = require("express");
const app = express();
const port = 3002;

app.get("/sum/:a/:b", (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    console.log(a+b);
    res.json(
        {
            ans: a+b
        }
    )
    // res.send(`The sum is ${a+b}`);
});
app.get("/multiply", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    console.log(a*b);
    res.json(
        {
            ans: a*b
        }
    )
    // res.send(`The sum is ${a+b}`);
});
app.get("/diff/:a/:b", (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    console.log(a-b);
    res.json(
        {
            ans: a-b
        }
    )
    // res.send(`The sum is ${a+b}`);
});
app.get("/div/:a/:b", (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    console.log(a/b);
    res.json(
        {
            ans: a/b
        }
    )
    // res.send(`The sum is ${a+b}`);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});




