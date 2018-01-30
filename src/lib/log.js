import chalk from 'chalk';
import Moment from 'moment';

const getTime = () => {
  const now = new Moment();
  const time = chalk.dim(`[${now.format('HH:mm:ss')}]`);
  return time;
};

const log = (...message) => {
  const time = getTime();
  const type = chalk.bold('[LOG]');
  console.log(`${time}${type}`, ...message);
};

log.info = (...message) => {
  const time = getTime();
  const type = chalk.bold(chalk.cyan('[INFO]'));
  console.info(`${time}${type}`, ...message);
};

log.error = (...message) => {
  const time = getTime();
  const type = chalk.bold(chalk.red('[ERROR]'));
  console.error(`${time}${type}`, ...message);
};

export default log;
