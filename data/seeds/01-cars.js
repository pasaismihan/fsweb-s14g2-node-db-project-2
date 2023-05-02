/**
 * @param { import("knex").Knex} knex
 * @returns { Promise<void> }
 */

const defaultCars = [
  {
    vin: "123",
    make: "Volkswagen",
    model: "Golf",
    mileage: 12345,
  },
  {
    vin: "1234",
    make: "Audi",
    model: "A4",
    mileage: 12345,
  },
  {
    vin: "12345",
    make: "Scoda",
    model: "Octavia",
    mileage: 12345,
  },
  {
    vin: "123456",
    make: "Seat",
    model: "Leon",
    mileage: 12345,
  },
  {
    vin: "1234567",
    make: "Mercedes",
    model: "E200",
    mileage: 12345,
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate();
  await knex("cars").insert(defaultCars);
};
