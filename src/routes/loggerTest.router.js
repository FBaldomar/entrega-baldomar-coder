import express from "express";
import logger from "../config/logger.js";

const router = express.Router();

router.get("/loggerTest", (req, res) => {
  logger.debug("Este es un mensaje de debug");
  logger.http("Este es un mensaje de http");
  logger.info("Este es un mensaje de info");
  logger.warn("Este es un mensaje de warning");
  logger.error("Este es un mensaje de error");
  logger.fatal("Este es un mensaje de fatal");

  res.json({
    message: "Logs generados en la consola y en el archivo errors.log",
  });
});

export default router;
