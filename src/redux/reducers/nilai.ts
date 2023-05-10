import { createSlice } from "@reduxjs/toolkit";

type NilaiState = {
  [key: string]: any;
};

const initialState: NilaiState = {
  data: null,
  isFulfilled: false,
  msg: null,
};

export const nilaiSlice = createSlice({
  name: "nilai_mahasiswa",
  initialState,
  reducers: {
    simpan: (prevState, action) => {
      return {
        ...prevState,
        data: action.payload,
        isFulfilled: true,
        msg: "Data sukses disimpan.",
      };
    },
    hapus: (prevState) => {
      return {
        ...prevState,
        data: null,
        isFulfilled: false,
        msg: "Data sukses dihapus.",
      };
    },
  },
});

export const nilaiAction = {
  ...nilaiSlice.actions,
};

export default nilaiSlice.reducer;
