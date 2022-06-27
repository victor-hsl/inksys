import React from 'react';
let active: number;

export const setActive = (code: number) => {
    active = code;
}

export const useActive = () => {
    return active;
}