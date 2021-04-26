const http = require("http");
const routes = require("./routes");

const app = http.createServer(routes);

app.listen(3000, () => console.log("Server is listening on port 3000"));
