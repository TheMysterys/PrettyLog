const foreColor = (code: number): string => `\u001B[38;5;${code}m`;
const backColor = (code: number): string => `\u001B[48;5;${code}m`;

export const AnsiColor = {
    RESET: "\u001B[0m",
    BOLD: "\u001B[1m",

    BLACK: "\u001B[30m",
    RED: "\u001B[31m",
    GREEN: "\u001B[32m",
    YELLOW: "\u001B[33m",
    BLUE: "\u001B[34m",
    PURPLE: "\u001B[35m",
    CYAN: "\u001B[36m",
    WHITE: "\u001B[37m",

    BRIGHT_BLACK: "\u001B[90m",
    BRIGHT_RED: "\u001B[91m",
    BRIGHT_GREEN: "\u001B[92m",
    BRIGHT_YELLOW: "\u001B[93m",
    BRIGHT_BLUE: "\u001B[94m",
    BRIGHT_PURPLE: "\u001B[95m",
    BRIGHT_CYAN: "\u001B[96m",
    BRIGHT_WHITE: "\u001B[97m",

    BLACK_BACKGROUND: "\u001B[40m",
    RED_BACKGROUND: "\u001B[41m",
    GREEN_BACKGROUND: "\u001B[42m",
    YELLOW_BACKGROUND: "\u001B[43m",
    BLUE_BACKGROUND: "\u001B[44m",
    PURPLE_BACKGROUND: "\u001B[45m",
    CYAN_BACKGROUND: "\u001B[46m",
    WHITE_BACKGROUND: "\u001B[47m",

    BRIGHT_BLACK_BACKGROUND: "\u001B[100m",
    BRIGHT_RED_BACKGROUND: "\u001B[101m",
    BRIGHT_GREEN_BACKGROUND: "\u001B[102m",
    BRIGHT_YELLOW_BACKGROUND: "\u001B[103m",
    BRIGHT_BLUE_BACKGROUND: "\u001B[104m",
    BRIGHT_PURPLE_BACKGROUND: "\u001B[105m",
    BRIGHT_CYAN_BACKGROUND: "\u001B[106m",
    BRIGHT_WHITE_BACKGROUND: "\u001B[107m",

    GRAY: foreColor(244),
    GRAY_BACKGROUND: backColor(244),

    ORANGE: foreColor(202),
    ORANGE_BACKGROUND: backColor(202),

    PINK: foreColor(200),
    PINK_BACKGROUND: backColor(200),

    CUTE_PINK: foreColor(205),
    CUTE_PINK_BACKGROUND: backColor(205),

    AQUA: foreColor(45),
    AQUA_BACKGROUND: backColor(45),

    GOLD: foreColor(220),
    GOLD_BACKGROUND: backColor(220),

    LIGHT_GREEN: foreColor(82),
    LIGHT_GREEN_BACKGROUND: backColor(82),

    LIGHT_BLUE: foreColor(39),
    LIGHT_BLUE_BACKGROUND: backColor(39),

    MAGENTA: foreColor(13),
    MAGENTA_BACKGROUND: backColor(13),

    LIGHT_CYAN: foreColor(51),
    LIGHT_CYAN_BACKGROUND: backColor(51),

    LIGHT_GRAY: foreColor(247),
    LIGHT_GRAY_BACKGROUND: backColor(247),

    DARK_RED: foreColor(88),
    DARK_RED_BACKGROUND: backColor(88),

    DARK_GREEN: foreColor(22),
    DARK_GREEN_BACKGROUND: backColor(22),

    DARK_BLUE: foreColor(19),
    DARK_BLUE_BACKGROUND: backColor(19),

    DARK_YELLOW: foreColor(136),
    DARK_YELLOW_BACKGROUND: backColor(136),

    DARK_PURPLE: foreColor(55),
    DARK_PURPLE_BACKGROUND: backColor(55)
} as const;

export const AnsiPair = {
    BLACK: { background: AnsiColor.BLACK_BACKGROUND, foreground: AnsiColor.BLACK },
    RED: { background: AnsiColor.RED_BACKGROUND, foreground: AnsiColor.RED },
    GREEN: { background: AnsiColor.GREEN_BACKGROUND, foreground: AnsiColor.GREEN },
    YELLOW: { background: AnsiColor.YELLOW_BACKGROUND, foreground: AnsiColor.YELLOW },
    BLUE: { background: AnsiColor.BLUE_BACKGROUND, foreground: AnsiColor.BLUE },
    PURPLE: { background: AnsiColor.PURPLE_BACKGROUND, foreground: AnsiColor.PURPLE },
    CYAN: { background: AnsiColor.CYAN_BACKGROUND, foreground: AnsiColor.CYAN },
    WHITE: { background: AnsiColor.WHITE_BACKGROUND, foreground: AnsiColor.WHITE },
    BRIGHT_BLACK: { background: AnsiColor.BRIGHT_BLACK_BACKGROUND, foreground: AnsiColor.BRIGHT_BLACK },
    BRIGHT_RED: { background: AnsiColor.BRIGHT_RED_BACKGROUND, foreground: AnsiColor.BRIGHT_RED },
    BRIGHT_GREEN: { background: AnsiColor.BRIGHT_GREEN_BACKGROUND, foreground: AnsiColor.BRIGHT_GREEN },
    BRIGHT_YELLOW: { background: AnsiColor.BRIGHT_YELLOW_BACKGROUND, foreground: AnsiColor.BRIGHT_YELLOW },
    BRIGHT_BLUE: { background: AnsiColor.BRIGHT_BLUE_BACKGROUND, foreground: AnsiColor.BRIGHT_BLUE },
    BRIGHT_PURPLE: { background: AnsiColor.BRIGHT_PURPLE_BACKGROUND, foreground: AnsiColor.BRIGHT_PURPLE },
    BRIGHT_CYAN: { background: AnsiColor.BRIGHT_CYAN_BACKGROUND, foreground: AnsiColor.BRIGHT_CYAN },
    BRIGHT_WHITE: { background: AnsiColor.BRIGHT_WHITE_BACKGROUND, foreground: AnsiColor.BRIGHT_WHITE },
    GRAY: { background: AnsiColor.GRAY_BACKGROUND, foreground: AnsiColor.GRAY },
    ORANGE: { background: AnsiColor.ORANGE_BACKGROUND, foreground: AnsiColor.ORANGE },
    PINK: { background: AnsiColor.PINK_BACKGROUND, foreground: AnsiColor.PINK },
    CUTE_PINK: { background: AnsiColor.CUTE_PINK_BACKGROUND, foreground: AnsiColor.CUTE_PINK },
    AQUA: { background: AnsiColor.AQUA_BACKGROUND, foreground: AnsiColor.AQUA },
    GOLD: { background: AnsiColor.GOLD_BACKGROUND, foreground: AnsiColor.GOLD },
    LIGHT_GREEN: { background: AnsiColor.LIGHT_GREEN_BACKGROUND, foreground: AnsiColor.LIGHT_GREEN },
    LIGHT_BLUE: { background: AnsiColor.LIGHT_BLUE_BACKGROUND, foreground: AnsiColor.LIGHT_BLUE },
    MAGENTA: { background: AnsiColor.MAGENTA_BACKGROUND, foreground: AnsiColor.MAGENTA },
    LIGHT_CYAN: { background: AnsiColor.LIGHT_CYAN_BACKGROUND, foreground: AnsiColor.LIGHT_CYAN },
    LIGHT_GRAY: { background: AnsiColor.LIGHT_GRAY_BACKGROUND, foreground: AnsiColor.LIGHT_GRAY },
    DARK_RED: { background: AnsiColor.DARK_RED_BACKGROUND, foreground: AnsiColor.DARK_RED },
    DARK_GREEN: { background: AnsiColor.DARK_GREEN_BACKGROUND, foreground: AnsiColor.DARK_GREEN },
    DARK_BLUE: { background: AnsiColor.DARK_BLUE_BACKGROUND, foreground: AnsiColor.DARK_BLUE },
    DARK_YELLOW: { background: AnsiColor.DARK_YELLOW_BACKGROUND, foreground: AnsiColor.DARK_YELLOW },
    DARK_PURPLE: { background: AnsiColor.DARK_PURPLE_BACKGROUND, foreground: AnsiColor.DARK_PURPLE }
} as const;


