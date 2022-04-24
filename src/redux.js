import { configureStore, createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
    name: "score",
    initialState: {
        player1: 0,
        player2: 0,
        jeuPlayer1: 0,
        jeuPlayer2: 0,
        setPlayer1: 0,
        setPlayer2: 0,
        sets: [],
        advantage: null,
        winner: null,
        playing: true
    },
    reducers: {
        pointReducer: (state,action) => {
            const calculatePoints = (scorePlayer,jeuPlayer) => {
                let points = 15;
                scorePlayer >= 30 && (points = 10);
                let score;
                let jeu;
                let equality = state.player1 === state.player2 ? true : false;
                let advantage = null;
                if ((scorePlayer === 40 && !equality && state.advantage === null) || (scorePlayer === 'avantage')) {
                    state = {
                        ...state,
                        player1: 0,
                        player2: 0
                    }
                    score = 0;
                    jeu = jeuPlayer + 1;
                } else if (scorePlayer === 40 && equality) {
                    advantage = action.payload;
                    score = 'avantage';
                    jeu = jeuPlayer;
                } else if (scorePlayer !== 'avantage' && state.advantage !== null) {
                    state = {
                        ...state,
                        player1: 40,
                        player2: 40
                    }
                    score = 40;
                    jeu = jeuPlayer;
                    advantage = null;
                } else {
                    score = scorePlayer + points;
                    jeu = jeuPlayer;
                }
                action.payload === 'player1' ? 
                state = {
                    ...state,
                    player1: score,
                    jeuPlayer1: jeu,
                    advantage: advantage
                } : 
                state = {
                    ...state,
                    player2: score,
                    jeuPlayer2: jeu,
                    advantage: advantage
                }
            }

            const calculateSet = () => {
                //console.log('calculateSet');
                const setArray = [...state.sets];
                const set = state.jeuPlayer1 + ' - ' + state.jeuPlayer2;
                let player1set = state.setPlayer1;
                let player2set = state.setPlayer2;
                state.jeuPlayer1 > state.jeuPlayer2 ? player1set ++ : player2set ++;
                let winner = null;
                player1set === 3 && (winner = 'player1');
                player2set === 3 && (winner = 'player2');
                setArray.push(set);
                state = {
                    ...state,
                    sets: setArray,
                    jeuPlayer1: 0,
                    jeuPlayer2: 0,
                    setPlayer1: player1set,
                    setPlayer2: player2set,
                    winner: winner
                }
            }

            const scorePlayer = action.payload === 'player1' ? state.player1 : state.player2;
            const jeuPlayer = action.payload === 'player1' ? state.jeuPlayer1 : state.jeuPlayer2;
            
            calculatePoints(scorePlayer,jeuPlayer);
            
            if (state.jeuPlayer1 === 7 || state.jeuPlayer2 === 7 || (state.jeuPlayer1 === 6 && state.jeuPlayer2 <= 4) || (state.jeuPlayer2 === 6 && state.jeuPlayer1 <= 4)) {
                calculateSet();
            }

            return state;
        },
        resetReducer: (state,action) => {
            state = {
                player1: 0,
                player2: 0,
                jeuPlayer1: 0,
                jeuPlayer2: 0,
                setPlayer1: 0,
                setPlayer2: 0,
                sets: [],
                advantage: null,
                winner: null,
                playing: true
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

export const { pointReducer, resetReducer, playPauseReducer} = scoreSlice.actions;

export const store = configureStore({
    reducer: {
        score: scoreSlice.reducer
    }
});