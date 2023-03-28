import React, {useEffect} from 'react';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header";
const tg = window.Telegram.WebApp
const App = () => {
    const {onToggleButton} = useTelegram()
    useEffect(() => {
       tg.ready()
    }, []);

    return (
        <div className="app">
            <Header/>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
};

export default App;
