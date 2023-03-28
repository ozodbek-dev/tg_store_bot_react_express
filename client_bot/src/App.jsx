import React, {useEffect} from 'react';
import {useTelegram} from "./hooks/useTelegram";
const tg = window.Telegram.WebApp
const App = () => {
    const {onToggleButton} = useTelegram()
    useEffect(() => {
       tg.ready()
    }, []);

    return (
        <div className="app">
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
};

export default App;
