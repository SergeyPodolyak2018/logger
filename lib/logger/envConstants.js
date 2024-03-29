import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: './config.env' });

const LOG_CONFIG_FILE = process.env['LOG_CONFIG_FILE'];
let fileData = {};

if (LOG_CONFIG_FILE) {
  try {
    const data = fs.readFileSync(path.join(LOG_CONFIG_FILE), {
      encoding: 'utf8',
      flag: 'r',
    });
    fileData = JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

const LOGGER_SERVER_PORT = process.env['LOGGER_SERVER_PORT'];
const LOGGER_SERVER_HOST = process.env['LOGGER_SERVER_HOST'];
let LOG_LEVEL = process.env['LOG_LEVEL'] || fileData.logLevel;
let LOG_APPENDER = process.env['LOG_APPENDER'] || fileData.appender;
let LOG_FORMATTER =
  process.env['LOG_FORMATTER'] || fileData.formatter || 'DEFAULT';
let LOG_DELIMETTER =
  process.env['LOG_DELIMETTER'] || fileData.delimetter || ',';
const MAIN_LOG_FILE = process.env['MAIN_LOG_FILE'] || 'logs.txt';
const ERROR_LOG_FILE = process.env['ERROR_LOG_FILE'] || 'error-logs.txt';

if (typeof LOG_LEVEL === 'string') {
  LOG_LEVEL = LOG_LEVEL.toUpperCase();
}
if (typeof LOG_APPENDER === 'string') {
  LOG_APPENDER = LOG_APPENDER.toUpperCase().split(',');
}
if (typeof LOG_FORMATTER === 'string') {
  LOG_FORMATTER = LOG_FORMATTER.toUpperCase();
}

export {
  LOG_LEVEL,
  LOG_APPENDER,
  MAIN_LOG_FILE,
  ERROR_LOG_FILE,
  LOG_FORMATTER,
  LOG_DELIMETTER,
  LOGGER_SERVER_PORT,
  LOGGER_SERVER_HOST,
};
