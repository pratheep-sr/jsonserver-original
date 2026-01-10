const express = require("express");
const jsonServer = require("json-server");

const app = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Serve Static Files
app.use("/public", express.static("public"));

app.use(middlewares);
app.use(router);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
