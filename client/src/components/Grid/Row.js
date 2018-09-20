import React from 'react';

export const Row = ({ customClass,children }) => {
    return (<div className={`row ${customClass?customClass:""}`}>
        { children }
    </div>)
}