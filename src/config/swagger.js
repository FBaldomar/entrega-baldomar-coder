import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Adoptme API",
      version: "1.0.0",
      description: "API para la gestión de adopciones de mascotas",
    },
  },
  apis: [path.join(__dirname, "../routes/*.js")],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

// src/routes/users.router.js
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 */

// src/routes/pets.router.js
/**
 * @swagger
 * /pets:
 *   get:
 *     summary: Obtiene todas las mascotas
 *     responses:
 *       200:
 *         description: Lista de mascotas obtenida correctamente
 */

// src/routes/adoptions.router.js
/**
 * @swagger
 * /adoptions:
 *   post:
 *     summary: Crea una nueva adopción
 *     responses:
 *       201:
 *         description: Adopción creada correctamente
 */

// src/app.js
