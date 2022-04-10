const express = require('express');
const app = express();

const tutorialRoutes = require('./routes/tutorialRoutes');
console.log("tutorialRoutes:", tutorialRoutes);

app.use(express.json());

app.use('/tutorial', tutorialRoutes);

app.use("/", (res, req) => {
    req.send("Welcome to Node js API")
});

// app.listen(3030);

var server = app.listen(process.env.PORT || 3030, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });