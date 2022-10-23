import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},
});

export default likesSlice.reducer;
