import MasterData from "../../models/masterDataModel.js";
import { v4 as uuidv4 } from "uuid";
import { errorHandler } from "../../utils/error.js";

const dummyData = [
  // Ethiopia pickup and drop-off locations
  {
    id: uuidv4(),
    district: "Addis Ababa",
    location: "Bole International Airport (ADD)",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Addis Ababa",
    location: "Meskel Square",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Addis Ababa",
    location: "Bole Medhanialem",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Addis Ababa",
    location: "Megenagna",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Addis Ababa",
    location: "Kazanchis",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Adama",
    location: "Adama City Center",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Adama",
    location: "Adama Bus Terminal",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Bishoftu",
    location: "Bishoftu City Center",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Bishoftu",
    location: "Kuriftu Resort",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Hawassa",
    location: "Hawassa City Center",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Hawassa",
    location: "Hawassa Bus Terminal",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Bahir Dar",
    location: "Bahir Dar Airport",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Bahir Dar",
    location: "Bahir Dar Bus Terminal",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Gondar",
    location: "Gondar Airport",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Dire Dawa",
    location: "Dire Dawa City Center",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Jimma",
    location: "Jimma City Center",
    type: "location",
  },
  {
    id: uuidv4(),
    district: "Mekelle",
    location: "Mekelle City Center",
    type: "location",
  },

  //cars

  //alto
  {
    id: uuidv4(),
    model: "Alto 800",
    variant: "manual",
    type: "car",
    brand: "maruthi",
  },
  {
    id: uuidv4(),
    model: "Alto 800",
    variant: "automatic",
    type: "car",
    brand: "maruthi",
  },
  {
    id: uuidv4(),
    model: "SKODA SLAVIA PETROL AT",
    variant: "automatic",
    type: "car",
    brand: "maruthi",
  },
  {
    id: uuidv4(),
    model: "NISSAN MAGNITE PETROL MT",
    variant: "manual",
    type: "car",
    brand: "nissan",
  },
  {
    id: uuidv4(),
    model: "SKODA KUSHAQ Petrol MT",
    variant: "manual",
    type: "car",
    brand: "skoda",
  },
  {
    id: uuidv4(),
    model: "SKODA KUSHAQ Petrol AT",
    variant: "automatic",
    type: "car",
    brand: "skoda",
  },
  {
    id: uuidv4(),
    model: "MG HECTOR Petrol MT",
    variant: "manual",
    type: "car",
    brand: "mg",
  },
  {
    id: uuidv4(),
    model: "MG HECTOR Petrol AT",
    variant: "automatic",
    type: "car",
    brand: "mg",
  },
  {
    id: uuidv4(),
    model: "MG HECTOR Diesel MT",
    variant: "manual",
    type: "car",
    brand: "mg",
  },
  {
    id: uuidv4(),
    model: "NISSAN TERRANO Diesel MT",
    variant: "manual",
    type: "car",
    brand: "nissan",
  },
  {
    id: uuidv4(),
    model: "NISSAN KICKS Petrol MT",
    variant: "manual",
    type: "car",
    brand: "nissan",
  },
  {
    id: uuidv4(),
    model: "NISSAN KICKS Petrol AT",
    variant: "manual",
    type: "car",
    brand: "nissan",
  },
  {
    id: uuidv4(),
    model: "VW TAIGUN Petrol MT",
    variant: "manual",
    type: "car",
    brand: "volkswagen",
  },
  {
    id: uuidv4(),
    model: "NISSAN MAGNITE Petrol MT",
    variant: "manual",
    type: "car",
    brand: "nissan",
  },
  {
    id: uuidv4(),
    model: "HYUNDAI ALCAZAR Diesel AT",
    variant: "automatic",
    type: "car",
    brand: "hyundai",
  },
  {
    id: uuidv4(),
    model: "CITROEN C3 Petrol MT",
    variant: "automatic",
    type: "car",
    brand: "citroen",
  },
  {
    id: uuidv4(),
    model: "ISUZU MUX Diesel AT",
    variant: "automatic",
    type: "car",
    brand: "isuzu",
  },
  {
    id: uuidv4(),
    model: "MG HECTOR PLUS Petrol MT",
    variant: "manual",
    type: "car",
    brand: "mg",
  },
  {
    id: uuidv4(),
    model: "MG HECTOR PLUS Petrol AT",
    variant: "automatic",
    type: "car",
    brand: "mg",
  },
  {
    id: uuidv4(),
    model: "MG HECTOR PLUS Diesel MT",
    variant: "manual",
    type: "car",
    brand: "mg",
  },

  {
    id: uuidv4(),
    model: "MARUTI SWIFT Petrol AT",
    variant: "automatic",
    type: "car",
    brand: "maruthi",
  },
  {
    id: uuidv4(),
    model: "DATSUN REDI GO Petrol MT",
    variant: "manual",
    type: "car",
    brand: "DATSUN",
  },
  {
    id: uuidv4(),
    model: "DATSUN REDI GO Petrol AT",
    variant: "automatic",
    type: "car",
    brand: "DATSUN",
  },
  {
    id: uuidv4(),
    model: "NISSAN MICRA Petrol MT",
    variant: "automatic",
    type: "car",
    brand: "NISSAN",
  },
  {
    id: uuidv4(),
    model: "VW AMEO Diesel MT",
    variant: "manual",
    type: "car",
    brand: "volkswagen",
  },
  {
    id: uuidv4(),
    model: "SKODA RAPID Petrol MT",
    variant: "manual",
    type: "car",
    brand: "skoda",
  },
  {
    id: uuidv4(),
    model: "MARUTI DZIRE Petrol MT",
    variant: "manual",
    type: "car",
    brand: "maruthi",
  },
  {
    id: uuidv4(),
    model: "VW VENTO Petrol MT",
    variant: "manual",
    type: "car",
    brand: "volkswagen",
  },
  {
    id: uuidv4(),
    model: "VW VENTO Petrol AT",
    variant: "automatic",
    type: "car",
    brand: "volkswagen",
  },
  {
    id: uuidv4(),
    model: "VW VENTO Diesel AT",
    variant: "automatic",
    type: "car",
    brand: "volkswagen",
  },
  {
    id: uuidv4(),
    model: "VW POLO Petrol MT",
    variant: "manual",
    type: "car",
    brand: "volkswagen",
  },
  {
    id: uuidv4(),
    model: "VW POLO Petrol AT",
    variant: "automatic",
    type: "car",
    brand: "volkswagen",
  },
  {
    id: uuidv4(),
    model: "VW POLO Diesel MT",
    variant: "manual",
    type: "car",
    brand: "volkswagen",
  },
];

// Function to insert dummy data into the database
export async function insertDummyData(req, res, next) {
  try {
    const locations = dummyData.filter((item) => item.type === "location");
    const carModels = dummyData.filter((item) => item.type === "car");

    await MasterData.sequelize.transaction(async (transaction) => {
      await MasterData.destroy({
        where: { type: "location" },
        transaction,
      });
      await MasterData.bulkCreate(locations, { transaction });

      const existingCarCount = await MasterData.count({
        where: { type: "car" },
        transaction,
      });
      if (existingCarCount === 0) {
        await MasterData.bulkCreate(carModels, { transaction });
      }
    });

    res.status(200).json({
      message: "Ethiopian pickup and drop-off locations are ready.",
      locationCount: locations.length,
    });
  } catch (error) {
    console.error("Error inserting dummy data:", error);
    next(errorHandler(500, "Could not update location data."));
  }
}

//app product modal data fetching from db
export const getCarModelData = async (req, res, next) => {
  try {
    const availableVehicleModels = await MasterData.find();
    if (!availableVehicleModels) {
      return next(errorHandler(404, "no model found"));
    }
    res.status(201).json(availableVehicleModels);
  } catch (error) {
    next(errorHandler(500, { "could not get model Data": error }));
  }
};
