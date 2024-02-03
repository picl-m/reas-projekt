import express, { Request, Response } from "express";
import mongoose from "mongoose";
const router = express.Router();

router.post("/reset-database", async (req: Request, res: Response) => {
  try {
    const modelNames = mongoose.modelNames();
    await Promise.all(
      modelNames.map(async (modelName) => {
        const model = mongoose.model(modelName);
        await model.deleteMany({});
      }),
    );
    res.status(200).json("Database reset was successful.");
  } catch (err) {
    let message = "Unknown error";
    if (err instanceof Error) message = err.message;
    res.status(500).json("Error resetting database: " + message);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json("HIIIIIIIIIII");
  } catch (err) {
    let message = "Unknown error";
    if (err instanceof Error) message = err.message;
    res.status(500).json("Error resetting database: " + message);
  }
});

export { router as testingRouter };