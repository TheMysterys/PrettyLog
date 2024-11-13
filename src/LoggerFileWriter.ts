import { log } from "./Logger";
import { CustomLogType, LogType } from "./LogType";
import { LoggerSettings } from "./Logger";
import * as fs from "fs";
import * as path from "path";

class LoggerFileWriter {
	private static isLoaded = false;
	private static filePath: string;
	private static unloadedLogQueue: Array<[string, CustomLogType]> = [];

	private static get logFileName(): string {
		const now = new Date();

		let nameFormat = LoggerSettings.logFileNameFormat;
		nameFormat = nameFormat
			.replace("yyyy", now.getFullYear().toString())
			.replace("MM", (now.getMonth() + 1).toString().padStart(2, "0"))
			.replace("dd", now.getDate().toString().padStart(2, "0"))
			.replace("HH", now.getHours().toString().padStart(2, "0"))
			.replace("mm", now.getMinutes().toString().padStart(2, "0"))
			.replace("ss", now.getSeconds().toString().padStart(2, "0"));

		return nameFormat;
	}

	public static load(): void {
		if (this.isLoaded) {
			log("[PrettyLog] FileWriter is already loaded!", LogType.ERROR);
			return;
		}

		if (!LoggerSettings.saveDirectoryPath.endsWith("/")) {
			LoggerSettings.saveDirectoryPath += "/";
		}
		
		this.filePath = path.join(LoggerSettings.saveDirectoryPath, `${this.logFileName}.log`);

		if (!this.directoryExists(LoggerSettings.saveDirectoryPath)) {
			log(`[PrettyLog] Specified log directory (${LoggerSettings.saveDirectoryPath}) was not found, creating one..`, LogType.WARNING);
            fs.mkdirSync(LoggerSettings.saveDirectoryPath, { recursive: true });
            log("[PrettyLog] Log directory created!", LogType.SUCCESS);
		}

		if (!fs.existsSync(this.filePath)) {
			if (this.logFileName.match(/[/\\?%*:|"<>]/)) {
				log(`[PrettyLog] Invalid characters detected in log file name (${this.logFileName})!`, LogType.ERROR);
				log("[PrettyLog] FileWriter failed to load!", LogType.ERROR);
				return;
			}
			fs.writeFileSync(this.filePath, '');
        }

		this.isLoaded = true;

		// Write any queued logs
        this.unloadedLogQueue.forEach(([message, type]) => this.writeToFile(message, type));
        this.unloadedLogQueue = [];
	}

	public static writeToFile(message: string, type: CustomLogType): void {
        if (!this.isLoaded) {
            this.unloadedLogQueue.push([message, type]);
            return;
        }

        const date = new Date().toISOString().replace('T', ' ').split('.')[0];
        const logEntry = `${date} [${type.name.toUpperCase()}] ${message}\n`;

        // Append to the log file
        fs.appendFileSync(this.filePath, logEntry);
    }

	private static directoryExists(directoryPath: string): boolean {
        return fs.existsSync(directoryPath) && fs.lstatSync(directoryPath).isDirectory();
    }
}

export { LoggerFileWriter };