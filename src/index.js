const express = require("express");
const { serverConfig} = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use('/api',apiRoutes);
app.listen(serverConfig.PORT, () => {
  console.log(`App Listening at PORT:-${serverConfig.PORT}`);
});
