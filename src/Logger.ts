import { AnsiColor } from "./Ansi";
import { LoggerFileWriter } from "./LoggerFileWriter";
import { CustomLogType, LogType } from "./LogType";

const LoggerStyle = {
	FULL: "<background><black><prefix>: <message>",
	PREFIX: "<background><black><prefix>:<reset> <foreground><message>",
	SUFFIX: "<foreground><prefix>: <background><black><message>",
	TEXT_ONLY: "<foreground><prefix>: <message>",
	PREFIX_WHITE_TEXT: "<background><black><prefix>:<reset> <message>",
	BRACKET_PREFIX: "<foreground><bold>[<prefix>]<reset><foreground> <message>",
	BRACKET_PREFIX_WHITE_TEXT: "<foreground><bold>[<prefix>] <reset><message>",
};

export const LoggerSettings = {
	saveToFile: true,
	saveDirectoryPath: "./logs/",
	loggerStyle: LoggerStyle.PREFIX,
	logFileNameFormat: "yyyy-MM-dd",
};

export function log(message: string, logType: CustomLogType = LogType.RUNTIME) {
	let pattern = LoggerSettings.loggerStyle;
	if (logType === LogType.FATAL) pattern = LoggerStyle.FULL;
	pattern = pattern
		.replace("<background>", logType.colorPair.background)
		.replace("<foreground>", logType.colorPair.foreground)
		.replace("<black>", AnsiColor.BLACK)
		.replace("<prefix>", logType.name)
		.replace("<message>", message)
		.replace("<reset>", AnsiColor.RESET)
		.replace("<bold>", AnsiColor.BOLD);

	console.log(`${pattern}${AnsiColor.RESET}`);
	if (LoggerSettings.saveToFile) {
		LoggerFileWriter.writeToFile(message, logType);
	}
}

export function logException(exception: Error) {
	log(`${exception}`, LogType.EXCEPTION);
    exception.stack?.split("\n").forEach(line => log(`   ${line}`, LogType.EXCEPTION));
}
