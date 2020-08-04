import React from 'react';
import useMyWidth from '../hooks/MyHook';

const MyWidth = () => {
    const myWidth = useMyWidth();
    return (
        <div>
            <h2>MyState</h2>
            <h3>windowWidth: {myWidth}</h3>
        </div>
    );
};

export default MyWidth;
