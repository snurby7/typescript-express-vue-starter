/**
 * The main access point for starting the OvernightJs server.
 */
import { Server } from "@overnightjs/core";
import * as bodyParser from "body-parser";
import { TestController } from "./controllers/TestController";

class ServerCentral extends Server {
  private readonly _SERVER_START_MSG = "DEBUG -- Server started on port: ";

  constructor() {
    super();
    // Setup json middleware
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    let testController = new TestController();

    super.addControllers([testController]);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(this._SERVER_START_MSG + port);
    });
  }
}

export default ServerCentral;
