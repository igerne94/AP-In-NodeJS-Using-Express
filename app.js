const express = require('express');
const app = express();

const tutorialRoutes = require('./routes/tutorialRoutes');
console.log("tutorialRoutes:", tutorialRoutes);

app.use(express.json());

app.use('/tutorial', tutorialRoutes);

app.use("/", (res, req) => {
    req.send("Welcome to Node js API")
});

app.listen(3030);