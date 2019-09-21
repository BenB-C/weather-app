import chanceflurries from './../assets/images/weather/chanceflurries.png';
import chancerain from './../assets/images/weather/chancerain.png';
import chancesleet from './../assets/images/weather/chancesleet.png';
import chancesnow from './../assets/images/weather/chancesnow.png';
import chancestorm from './../assets/images/weather/chancestorm.png';
import clear from './../assets/images/weather/clear.png';
import clearnight from './../assets/images/weather/clearnight.png';
import cloudy from './../assets/images/weather/cloudy.png';
import cloudynight from './../assets/images/weather/cloudynight.png';
import cloudysnow from './../assets/images/weather/cloudysnow.png';
import cloudywindy from './../assets/images/weather/cloudywindy.png';
import cloudywindy02 from './../assets/images/weather/cloudywindy02.png';
import flurries from './../assets/images/weather/flurries.png';
import fog from './../assets/images/weather/fog.png';
import freezing from './../assets/images/weather/freezing.png';
import freezingrain from './../assets/images/weather/freezingrain.png';
import freezingsnow from './../assets/images/weather/freezingsnow.png';
import frost from './../assets/images/weather/frost.png';
import hazy from './../assets/images/weather/hazy.png';
import hazyfreezing from './../assets/images/weather/hazyfreezing.png';
import hazysnow from './../assets/images/weather/hazysnow.png';
import hot01 from './../assets/images/weather/hot01.png';
import hot02 from './../assets/images/weather/hot02.png';
import mostlysunny from './../assets/images/weather/mostlysunny.png';
import partlycloudy from './../assets/images/weather/partlycloudy.png';
import partlycloundynight from './../assets/images/weather/partlycloundynight.png';
import partlysunny from './../assets/images/weather/partlysunny.png';
import partysunnyrain from './../assets/images/weather/partysunnyrain.png';
import rain01 from './../assets/images/weather/rain01.png';
import rain02 from './../assets/images/weather/rain02.png';
import rain03 from './../assets/images/weather/rain03.png';
import rainbow from './../assets/images/weather/rainbow.png';
import rainnight from './../assets/images/weather/rainnight.png';
import scatteredclouds from './../assets/images/weather/scatteredclouds.png';
import sleet from './../assets/images/weather/sleet.png';
import snow from './../assets/images/weather/snow.png';
import snow01 from './../assets/images/weather/snow01.png';
import snownight from './../assets/images/weather/snownight.png';
import storms from './../assets/images/weather/storms.png';
import thunder from './../assets/images/weather/thunder.png';
import thunderstorms01 from './../assets/images/weather/thunderstorms01.png';
import thunderstorms02 from './../assets/images/weather/thunderstorms02.png';
import unknown from './../assets/images/weather/unknown.png';
import windy from './../assets/images/weather/windy.png';

function imageForCondition(description) {
  switch (description) {
    case 'Clowdy': return cloudy;
    case 'Partly Cloudy': return partlycloudy;
    case 'Mostly Cloudy': return partlysunny;
    case 'Rain': return rain03;
    case 'Showers': return flurries;
    case 'Sunny':
    case 'Clear': return clear;
    default: return unknown;
  }
}

export default imageForCondition;
