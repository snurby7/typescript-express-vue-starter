import { logger } from "@shared";
import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK } from "http-status-codes";

const router = Router();

/******************************************************************************
 *      This is a test, but I like the block comment
 ******************************************************************************/
router.get("/", async (req: Request, res: Response) => {
  try {
    return res.status(OK).json({ message: "this is a test" });
  } catch (err) {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
      error: err.message
    });
  }
});

export default router;
