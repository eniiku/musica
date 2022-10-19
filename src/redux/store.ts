import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { musicApi } from './services/musicApi';

export const store: any = configureStore({
  reducer: { player: playerReducer, [musicApi.reducerPath]: musicApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});
