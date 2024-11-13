import { AnsiPair } from "./Ansi";

class CustomLogType {
    constructor(
        public name: string,
        public colorPair: { background: string; foreground: string }
    ) {}
}

const LogType = {
    INFORMATION: new CustomLogType("ℹ️ Information", AnsiPair.CYAN),
	RUNTIME: new CustomLogType("✨ Runtime", AnsiPair.MAGENTA),
    DEBUG: new CustomLogType("🔧 Debug", AnsiPair.GRAY),
    NETWORK: new CustomLogType("🔌 Network", AnsiPair.BLUE),
    SUCCESS: new CustomLogType("✔️ Success", AnsiPair.BRIGHT_GREEN),
    WARNING: new CustomLogType("⚠️ Warning", AnsiPair.BRIGHT_YELLOW),
    ERROR: new CustomLogType("⛔ Error", AnsiPair.RED),
    EXCEPTION: new CustomLogType("💣 Exception", AnsiPair.RED),
    CRITICAL: new CustomLogType("🚨 Critical", AnsiPair.BRIGHT_RED),
    AUDIT: new CustomLogType("📋 Audit", AnsiPair.YELLOW),
    TRACE: new CustomLogType("🔍 Trace", AnsiPair.LIGHT_BLUE),
    SECURITY: new CustomLogType("🔒 Security", AnsiPair.PURPLE),
    USER_ACTION: new CustomLogType("🧍 User Action", AnsiPair.CUTE_PINK),
    PERFORMANCE: new CustomLogType("⏱️ Performance", AnsiPair.PINK),
    CONFIG: new CustomLogType("⚙️ Config", AnsiPair.LIGHT_GRAY),
    FATAL: new CustomLogType("☠️ Fatal", AnsiPair.DARK_RED)
} as const;

export { LogType, CustomLogType };