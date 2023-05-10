import { combineReducers } from "@reduxjs/toolkit";

import nilaiSlice from "./nilai";

export default combineReducers({
  nilai: nilaiSlice,
});
