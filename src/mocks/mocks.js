import faker from "faker";
import bcrypt from "bcrypt";

export const generateMockPets = (count = 100) => {
  return Array.from({ length: count }, () => ({
    name: faker.name.firstName(),
    species: faker.animal.type(),
    age: faker.datatype.number({ min: 1, max: 15 }),
    adopted: false,
    owner: null,
  }));
};

export const generateMockUsers = (count = 50) => {
  return Array.from({ length: count }, () => ({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync("coder123", 10),
    role: faker.helpers.randomize(["user", "admin"]),
    pets: [],
  }));
};
