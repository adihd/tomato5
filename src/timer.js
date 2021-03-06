import moment from 'moment';
import { taskDurations } from './configs';

const getRemaning = function getRemaning(startTime, type) {
  const duration = moment.duration(taskDurations[type], 'seconds');
  const elapsed = moment().diff(startTime, 'seconds');
  const remaning = duration.subtract(elapsed, 'seconds');

  return remaning;
};

const getContdown = function getContdown(startTime, type, level) {
  const remaning = getRemaning(startTime, type);

  let minutes = remaning.minutes() > 0 ? remaning.minutes() : 0;
  let seconds = remaning.seconds() > 0 ? remaning.seconds() : 0;
  let result = '';

  if (level === 'minute') {
    result = `${minutes + (seconds > 0 ? 1 : 0)}m`;
  } else {
    minutes = minutes > 9 ? `${minutes}` : `0${minutes}`;
    seconds = seconds > 9 ? `${seconds}` : `0${seconds}`;
    result = `${minutes}:${seconds}`;
  }

  return result;
};

export default { getRemaning, getContdown };
