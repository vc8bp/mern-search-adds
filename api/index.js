const express = require("express")
const app = express()
const connectToMongo = require('./db')
connectToMongo()
const cors = require('cors')
const port = 4000

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello")
})

app.use('/api', require('./routes/add'))

app.listen(port, ()=> {
    console.log(`server riunning on port ${port}`);
})