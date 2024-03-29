import * as constants from './constants.js';
import config from './config.js';
import consoleAppender from './appenders/console.js';
import fileAppender from './appenders/file.js';
import networkAppender from './appenders/network.js';

const appenders = {
  [constants.appender.CONSOLE]: consoleAppender,
  [constants.appender.FILE]: fileAppender,
  [constants.appender.NETWORK]: networkAppender,
  [undefined]: consoleAppender,
};
function initAppenders(ee, EVENT_NAME, formatter) {
  for (const iterator of config.appender) {
    appenders[iterator].create(ee, EVENT_NAME, formatter);
  }
  return;
}

export { initAppenders };
