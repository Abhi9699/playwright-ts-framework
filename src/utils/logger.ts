export class Logger {
  static info(message: string, ...args: unknown[]) {
    // eslint-disable-next-line no-console
    console.info(`[INFO] [${new Date().toISOString()}] ${message}`, ...args);
  }
  static warn(message: string, ...args: unknown[]) {
    // eslint-disable-next-line no-console
    console.warn(`[WARN] [${new Date().toISOString()}] ${message}`, ...args);
  }
  static error(message: string, ...args: unknown[]) {
    // eslint-disable-next-line no-console
    console.error(`[ERROR] [${new Date().toISOString()}] ${message}`, ...args);
  }
}
