const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ 
        "testArr": ["thing_one", "thing_two", "thing_three", "thing_four", "thing_five"]
    })
})
app.listen(4000, () => { console.log("Server running on port 4000")})