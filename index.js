const express = require("express")
const app = express();
const authRoute = require("./routes/authRoute")

//rest object
app.use(express.json());

app.use("/api", authRoute);

// rout
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server running ${PORT}`)
})

