import React from 'react';
let title: string;
let subtitle: string;

export const getHeader = () => {
    return [title, subtitle];
}

export const setHeader = (titulo: string, subtitulo: string) => {
    title = titulo;
    subtitle = subtitulo;    
}
