export interface Logger {
  log: (message: any) => void
}

export class LoggerConsole implements Logger {
  log = (message: any) => {
    console.log(message)
  }
}
