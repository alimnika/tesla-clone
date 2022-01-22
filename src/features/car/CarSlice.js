import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    car: ['Model S', 'Model 3', 'Model X', 'Model Y']
}
const carSlice = createSlice({
    name:'car',
    initialState,
    reducer:{}
})

export const selectCars = state =>state.car;