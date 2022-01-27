import express from "express";
import routes from "./routes/index";

// Create and start express server on port 3000
const app = express();
const port = 3000;

app.use("/api", routes);

app.listen(port, (): void => console.log(`Listeing on port ${port}!`));

export default app;
