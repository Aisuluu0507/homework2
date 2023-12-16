import React, { useState } from 'react';
import './App.css';

function App() {
    const [blockOne, ColorOneBlock] = useState('red');
    const [blockTwo, ColorTwoBlock] = useState('blue');

    const handleSquareClick = () => {
        const tempColor = blockOne;
        ColorOneBlock(blockTwo);
        ColorTwoBlock(tempColor);
    };

    return (
        <div className="blocks">
            <div
                className="block"
                style={{ backgroundColor: blockOne }}
                onClick={handleSquareClick}
            ></div>
            <div
                className="block"
                style={{ backgroundColor: blockTwo }}
                onClick={handleSquareClick}
            ></div>
        </div>
    );
}


export default App;