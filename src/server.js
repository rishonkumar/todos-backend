const express = require('express');

const fakeTodos = [{
    id: "123",
    text: 'Checking',
    isCompleted: false,
},
    {
        id: "223",
        text: 'Checking completed',
        isCompleted: true,
    }

]

const app = express();

//adding route

// app.get('/test', (req, res) => {
//     res.send("Hello from backend")
// })

app.get("/todos", (req, res) => {
    res.json(fakeTodos);
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})