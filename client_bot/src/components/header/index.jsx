import React, {useEffect} from 'react';
import "./index.css"
import Button from "../button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
  const tg = window.Telegram.WebApp;
  const onClose = ()=>{
      tg.close(0)
  }

    return (
        <header>
            <Button onClick={onClose}>Yopish</Button>
            <span className={"username"}>
                {tg.initDataUnsave?.user?.username}
            </span>
        </header>
    );
};

export default Header;
