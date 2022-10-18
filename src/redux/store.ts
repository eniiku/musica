import { configureStore } from '@reduxjs/toolkit';

import { musicApi } from './services/musicApi';

export const store: any = configureStore({
  reducer: { [musicApi.reducerPath]: musicApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});
