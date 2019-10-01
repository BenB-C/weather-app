import { CHANGE_DAY } from './../constants/ActionTypes';

export const changeDay = (newSelectedDayIndex) => ({
  type: CHANGE_DAY,
  newSelectedDayIndex
});
