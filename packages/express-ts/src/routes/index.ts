import { Router } from "express";
import TestRouter from "./TestRouter";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/test", TestRouter);

// Export the base-router
export default router;
