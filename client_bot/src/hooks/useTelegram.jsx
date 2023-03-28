

export function useTelegram(){
    const tg = window.Telegram.WebApp
    const onToggleButton = ()=>{
        if(tg.MainButton.isVisible){
            tg.MainButton.show()
        }else{
            tg.MainButton.hide();
        }
    }
    const onClose = ()=>{
        tg.close();
    }
    return {
        onClose,
        onToggleButton,
        tg,
        user:tg.initDataUnsave?.user
    }
}