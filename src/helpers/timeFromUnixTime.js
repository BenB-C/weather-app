export default (unixTime, format) => {
  const date = new Date(unixTime * 1000);
  const dateStr = options => date.toLocaleString('en-US', options)
  switch (format) {
    case 'hourNumber':
      return date.getHours();
    case 'hour':
      return dateStr({ hour: 'numeric', hour12: true });
    case 'hourAndMinutes':
      return dateStr({timeStyle: 'short'});
    case 'weekdayAndTime':
      return dateStr({weekday: 'long'}) + ' ' + dateStr({timeStyle: 'short'});
    case 'weekdayShort':
      return dateStr({weekday: 'short'});
    case 'weekdayAndDate':
      return dateStr({weekday: 'long'}) + ' ' + dateStr({dateStyle: 'medium'});
    default:
      return dateStr();
  }
}
