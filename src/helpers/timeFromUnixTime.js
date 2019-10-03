export default (unixTime, format) => {
  const date = new Date(unixTime * 1000);
  const dateStr = options => date.toLocaleString('en-US', options)
  switch (format) {
    case 'hour':
      return date.getHours();
    case 'time':
      return dateStr({timeStyle: 'short'});
    case 'weekdayAndTime':
      return dateStr({weekday: 'long'}) + ' ' + dateStr({timeStyle: 'short'});
    case 'weekdayShort':
      return dateStr({weekday: 'short'});
    case 'weekdayAndDate':
      return dateStr({weekday: 'long'}) + ' ' + dateStr({dateStyle: 'short'});
    default:
      return dateStr();
  }
}
