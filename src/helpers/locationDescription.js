export default (location) => {
  const street = location.street;
  const postalCode = location.postalCode;
  const city = location.adminArea5;
  const county = location.adminArea4;
  const state = location.adminArea3;
  const country = location.adminArea1;
  let dataArray = [ street, city, county, state, postalCode, country ];
  return dataArray.filter(d => d !== '').join(', ');
}
