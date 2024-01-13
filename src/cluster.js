const express = require("express");
const cluster = require("cluster");
const os = require("os");
const { serverConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use("/api", apiRoutes);
if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  // Fork workers
  for (let i = 1; i < 3; i++) {
    const worker = cluster.fork();
    const workerPort = parseInt(serverConfig.PORT) + i;
    worker.send({ port: workerPort });
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  process.on("message", (message) => {
    if (message && message.port) {
      const port = message.port;
      app.listen(port, () => {
        console.log(`Worker ${cluster.worker.id} is listening on port ${port}`);
      });
    }
  });
}
