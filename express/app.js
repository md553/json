const express = require("express")
const app = express();
const port = 80;
app.get("/", (req, res) => {
    res.send("this is my home page express app")
});

app.get("/about", (req, res) => {
    res.send("this is my about page express app")
});

app.post("/about", (req, res) => {
    res.send("this is the post of my home page express app")
});


app.listen(port, () => {
    console.log(`The application started successfully ${port}`)
})