import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
dotenv.config();
const webAppUrl = "https://google.com"

const bot = new TelegramBot(process.env.TG_BOT_TOKEN, {polling:true});

bot.on("message", async(msg)=>{
    const chatId = msg.chat.id;
    const text = msg.text;
    if(text==="/start"){
        await  bot.sendMessage(chatId,"Formaga o'tish", {
            reply_markup:{
                keyboard:[
                    [{text:"Formani to'ldirish"}]
                ]
            }
        })
    }

    await  bot.sendMessage(chatId,"Quyidagi knopkani bosish orqali buyurtma bering 👇", {
        reply_markup:{
            inline_keyboard:[
                [{text:"Buyurtma berish", web_app:{url:webAppUrl}}]
            ]
        }
    })


})