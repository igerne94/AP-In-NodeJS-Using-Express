const express = require('express');
const app = express();

const tutorialRoutes = require('./routes/tutorialRoutes');

app.use(express.json());

app.use('/tutorial', tutorialRoutes);

app.use("/", (res, req) => {
    req.send("Welcome to Node API")
});

app.listen(3030);