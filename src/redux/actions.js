import * as types from './types';

export const setGuest = (_guest) => ({
    type: types.GUEST,
    guest: _guest
});

export const setStrength = (_strong) => ({
    type: types.STRONG,
    strong: _strong
});

export const setSweetness = (_sweet) => ({
    type: types.SWEET,
    sweet: _sweet
});

export const setCraziness = (_crazy) => ({
    type: types.CRAZY,
    crazy: _crazy
});

export const setFanciness  = (_fancy) => ({
    type: types.FANCY,
    fancy: _fancy
});