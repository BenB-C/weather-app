export default unixTime => new Date(unixTime * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
