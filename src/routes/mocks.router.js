import express from "express";
import { generateMockPets, generateMockUsers } from "../mocks.js";
import { Pet, User } from "../models";
import logger from "../config/logger.js";

const router = express.Router();

router.get("/mockingpets", (req, res) => {
  const pets = generateMockPets();
  logger.info(`Generadas ${pets.length} mascotas mockeadas`);
  res.json(pets);
});

router.get("/mockingusers", (req, res) => {
  const users = generateMockUsers();
  logger.info(`Generados ${users.length} usuarios mockeados`);
  res.json(users);
});

router.post("/generateData", async (req, res) => {
  const { users = 50, pets = 100 } = req.body;
  try {
    const newUsers = generateMockUsers(users);
    const newPets = generateMockPets(pets);
    await User.insertMany(newUsers);
    await Pet.insertMany(newPets);
    logger.info(`Insertados ${users} usuarios y ${pets} mascotas en la BD`);
    res.status(201).json({ message: "Data inserted successfully" });
  } catch (error) {
    logger.error(`Error insertando datos: ${error.message}`);
    res.status(500).json({ message: "Error inserting data", error });
  }
});

router.get("/mockingpets", (req, res) => {
  const pets = generateMockPets();
  res.json(pets);
});

router.get("/mockingusers", (req, res) => {
  const users = generateMockUsers();
  res.json(users);
});

router.post("/generateData", async (req, res) => {
  const { users = 50, pets = 100 } = req.body;
  try {
    const newUsers = generateMockUsers(users);
    const newPets = generateMockPets(pets);
    await User.insertMany(newUsers);
    await Pet.insertMany(newPets);
    res.status(201).json({ message: "Data inserted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error inserting data", error });
  }
});

export default router;
