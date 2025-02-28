const express = require("express");
const app = express();
const port = 3002;

let requestCount = 0;
function requestIncreaser(req, res, next){
    requestCount = requestCount + 1;
    console.log(`Total number of requests handled by the server are ${requestCount}`);
    next();
}
// logs the method, timestamp and the url

function middleware(req, res, next){
    console.log(`The given request was handled using ${req.method} method.`);
    console.log(`The given request was accessed on the url ${req.hostname}`);
    console.log(new Date())
    next();
}

app.use(middleware);
app.use(requestIncreaser);

app.get("/sum/:a/:b",  (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    
    res.json(
        {
            ans: a+b
        }
    )
     
});
app.get("/multiply", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    
    res.json(
        {
            ans: a*b
        }
    )
    
});
app.get("/diff/:a/:b", (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    
    res.json(
        {
            ans: a-b
        }
    )
    
});
app.get("/div/:a/:b", (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    
    res.json(
        {
            ans: a/b
        }
    )
    
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});




