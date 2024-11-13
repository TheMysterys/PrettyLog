import { log, logException } from "./Logger"
import { LoggerFileWriter } from "./LoggerFileWriter"
import { LogType } from "./LogType"
import fs from "fs"

function main() {
    LoggerFileWriter.load()

	log("Running main() in Demo.ts..", LogType.DEBUG)
    log("Very informative information", LogType.INFORMATION)
    log("I am running on time!", LogType.RUNTIME)
    log("Downloading maxwell.mp3", LogType.NETWORK)
    log("maxwell.mp3 has been downloaded!", LogType.SUCCESS)
    log("Warning.. file maxwell.mp3 may be corrupted!", LogType.WARNING)
    log("maxwell.mp3 cannot be played using IDrawableTrack", LogType.ERROR)

    log("Critical issue detected in the payment system!", LogType.CRITICAL)
    log("User Bob accessed the admin panel", LogType.AUDIT)
    log("Entering detailed trace mode for debugging", LogType.TRACE)
    log("Security breach attempt detected!", LogType.SECURITY)
    log("NeuroSama updated her profile picture to bread.png", LogType.USER_ACTION)
    log("Response time is 250ms", LogType.PERFORMANCE)
    log("MaxConnections set to 1000", LogType.CONFIG)
    log("Your life will be terminated", LogType.FATAL)

    try {
        fs.readFileSync("nonexistentfile.txt")
    } catch (exception: any) {
        logException(exception)
    }
}

main()