import { AnsiColor } from "./Ansi";
import { LoggerFileWriter } from "./LoggerFileWriter";
import { CustomLogType, LogType } from "./LogType";

export const LoggerStyle = {
	FULL: "<background><black><prefix>: <message>",
	PREFIX: "<background><black><prefix>:<reset> <foreground><message>",
	SUFFIX: "<foreground><prefix>: <background><black><message>",
	TEXT_ONLY: "<foreground><prefix>: <message>",
	PREFIX_WHITE_TEXT: "<background><black><prefix>:<reset> <message>",
	BRACKET_PREFIX: "<foreground><bold>[<prefix>]<reset><foreground> <message>",
	BRACKET_PREFIX_WHITE_TEXT: "<foreground><bold>[<prefix>] <reset><message>",
};

export const LoggerSettings = {
	saveToFile: false,
	saveDirectoryPath: "./logs/",
	loggerStyle: LoggerStyle.PREFIX,
	logFileNameFormat: "yyyy-MM-dd",
};

export function log(message: string, logType: CustomLogType = LogType.RUNTIME) {
	let pattern = LoggerSettings.loggerStyle;
	if (logType === LogType.FATAL) pattern = LoggerStyle.FULL;
	pattern = pattern
		.replaceAll("<background>", logType.colorPair.background)
		.replaceAll("<foreground>", logType.colorPair.foreground)
		.replaceAll("<black>", AnsiColor.BLACK)
		.replaceAll("<prefix>", logType.name)
		.replaceAll("<reset>", AnsiColor.RESET)
		.replaceAll("<bold>", AnsiColor.BOLD)
		.replaceAll("<message>", message);

	console.log(`${pattern}${AnsiColor.RESET}`);
	if (LoggerSettings.saveToFile) {
		LoggerFileWriter.writeToFile(message, logType);
	}
}

export function logException(exception: Error) {
	log(`${exception}`, LogType.EXCEPTION);
    exception.stack?.split("\n").forEach(line => log(`   ${line}`, LogType.EXCEPTION));
}
