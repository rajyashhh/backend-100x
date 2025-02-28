const express = require("express");
const app = express();
const port = 3001;

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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});




