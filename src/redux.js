import { configureStore, createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
    name: "score",
    initialState: {
        player1: 0,
        player2: 0,
        advantage: null,
        winner: null,
        playing: true
    },
    reducers: {
        pointReducer: (state,action) => {
            const player = action.payload;
            state = {
                ...state,
                player: 15
            }
            return state;
        },
        playPauseReducer: (state,action) => {
                state = {
                    ...state,
                    playing: !state.playing
                }
            return state;
        }
    }
})

export const { pointReducer, playPauseReducer} = scoreSlice.actions;

export const store = configureStore({
    reducer: {
        score: scoreSlice.reducer
    }
});