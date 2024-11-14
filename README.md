# PrettyLog

A JavaScript/TypeScript logging library focused on readability in console.
PrettyLog takes advantage of ANSI color codes to make your logs look ✨ ***pretty*** ✨.  
This whole project is inspired by Kotlin version of [PrettyLog](https://github.com/LukynkaCZE/PrettyLog) made by [LukynkaCZE](https://github.com/LukynkaCZE/).

## Installation
```
npm i @themysterys/pretty-log
```

## Logging
Logging is very easy, just call the `log(message, type)` method. `type` parameter is optional and defaults to `RUNTIME`
```js
const { log, LogType } = require("@themysterys/pretty-log");

log("Hello there!")
log("general kenobi", LogType.NETWORK)
```

You can also log exceptions!
```js
} catch (exception) {
    logException(exception)
}
```

## Logger Settings
You can change settings by simply setting `LoggerSettings.<setting>` to its new value
```js
const { LoggerSettings, LoggerStyle } = require("@themysterys/pretty-log");

// Should the logs be saved to file?
LoggerSettings.saveToFile = true
// The path to the logs directory
LoggerSettings.saveDirectoryPath = "./logs/"
// Format of the log file name
LoggerSettings.logFileNameFormat = "yyyy-MM-dd-Hms"
// Style of the logger in console
LoggerSettings.loggerStyle = LoggerStyle.PREFIX
```

### Logger Styles
There are 7 logger styles in total:

![log-styles](https://cdn.themysterys.com/img/pATpWUXsCt)

## Log Types
There are 16 default log types: **Debug**, **Information**, **Runtime**, **Network**, **Success**, **Warning**, **Error**, **Exception**, **Critical**, **Audit**, **Trace**, **Security**, **User Action**, **Performance**, **Config**, and **Fatal**.

![demo-image](https://cdn.themysterys.com/img/hoapQdDmBX)

### Custom Log Types
You can make custom log types by making object and then making vals in it with `new CustomLogType(name, AnsiPair)` data class

```js
const { CustomLogType, AnsiPair, log} = require("@themysterys/pretty-log");

const CustomLogTypes = {
  CUTE: new CustomLogType("≽^•⩊•^≼", AnsiPair.CUTE_PINK),
	GIT: new CustomLogType("\uD83E\uDD16 Git", AnsiPair.AQUA),
	FIRE_WARNING: new CustomLogType("\uD83D\uDD25 Fire Warning",AnsiPair.ORANGE),
};

log("T-This is vewy cuwute message OwO", CustomLogTypes.CUTE)
log("refusing to merge unrelated histories", CustomLogTypes.GIT)
log("SERVER ROOM ON FIRE, DONT LET ASO RUN WHILE LOOPS EVER AGAIN", CustomLogTypes.FIRE_WARNING)
```
![custom-log-type-image](https://cdn.themysterys.com/img/bjKxXdRfFm)
