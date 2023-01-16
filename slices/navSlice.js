import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null
}


export const navSlice = createSlice({
    name: 'navi',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestiniation: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInfo: (state, action) => {
            state.travelTimeInfo = action.payload
        },
    },
});

export const {setOrigin, setDestiniation, setTravelTimeInfo} = navSlice.actions


export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;


export default navSlice.reducer;