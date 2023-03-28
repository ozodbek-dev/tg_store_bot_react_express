import React, {useEffect} from 'react';
import "./index.css"
import Button from "../button";

const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = ()=>{
        tg.close();
    }
    return (
        <header>
            <Button onClick={onClose}>Yopish</Button>
            <span className={"username"}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </header>
    );
};

export default Header;
