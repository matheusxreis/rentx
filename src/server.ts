import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import SwaggerFile from "./swagger.json";

import "./database";
import "./shared/container";
import { AppError } from "./errors/AppErrors";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(SwaggerFile));
app.use(router);

// quando trabalhamos com middlewares de erro, o erro sempre vem primeiro
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running!"));
