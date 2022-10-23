import { configureStore } from '@reduxjs/toolkit';

import collectionReducer from './features/collections/collectionSlice';
import likesReducer from './features/likes/likesSlice';
import playerReducer from './features/music_player/playerSlice';
import { musicApi } from './services/musicApi';

export const store: any = configureStore({
  reducer: {
    player: playerReducer,
    [musicApi.reducerPath]: musicApi.reducer,
    collections: collectionReducer,
    likes: likesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});

console.log(store);
