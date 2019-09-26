import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller("api/test")
export class TestController {
  @Get()
  testEndpoint(req: Request, res: Response): void {
    res.status(200).json({ msg: "test_endpoint_hit" });
  }
}
