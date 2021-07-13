import express from "express";
import SwaggerUI from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import SwaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(SwaggerFile));

app.use("/users", usersRoutes);

export { app };
