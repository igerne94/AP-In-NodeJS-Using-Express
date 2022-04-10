const express = require('express');
const app = express();

//path to the folder:
const tRoutes = require('./routes/tRoutes');

app.use(express.json());

//rest path
app.use('/getData', tRoutes);

app.use("/", (res, req) => {
    req.send("Welcome to Node js API. Try /getData to see all the data. It is also possible to make a search by id")
});

// app.listen(3030);

var server = app.listen(process.env.PORT || 3030, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });