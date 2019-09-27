import { LoggerModes } from "@overnightjs/logger";
import { unlinkSync } from "fs";
import { join } from "path";
import ServerCentral from "./ServerCentral";

// Set env variables
const logFilePath = join(__dirname, "../.log");
process.env.OVERNIGHT_LOGGER_FILEPATH = logFilePath;
process.env.OVERNIGHT_LOGGER_MODE = LoggerModes.Console;
process.env.OVERNIGHT_LOGGER_RM_TIMESTAMP = "false";

// Remove current log file
(function removeFile() {
  try {
    unlinkSync(logFilePath);
  } catch (e) {
    return;
  }
})();

const server = new ServerCentral();
server.start(3000);
