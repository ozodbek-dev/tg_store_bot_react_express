import React, {useEffect} from 'react';
import {useTelegram} from "./hooks/useTelegram";

const App = () => {
    const {tg , onToggleButton} = useTelegram()
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
