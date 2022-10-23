import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collectionItems: [],
};

const collectionSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
});
export default collectionSlice.reducer;
