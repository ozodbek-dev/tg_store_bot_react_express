import React, {useEffect} from 'react';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header";
const tg = window.Telegram.WebApp
const App = () => {
    useEffect(() => {
       tg.ready()
    }, []);
    const onToggleButton = ()=>{
        if(tg.MainButton.isVisible){
            tg.MainButton.show()
        }else{
            tg.MainButton.hide();
        }
    }
    return (
        <div className="app">
            <Header/>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
};

export default App;
