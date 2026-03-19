 const express = require('express');
const app = express();

const dataRoute = require("./routes/dataRoute");
app.use("/data", dataRoute);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});