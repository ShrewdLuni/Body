"use client"

import { Button } from "@/components/ui/button"
import axios from "axios";
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';


export default function Home() {

  let text = "Оплата прошла успешно!"

  const handleClick = async() => {
    const res = await axios.post("https://api.telegram.org/bot6614162088:AAFrNyUhVtCb0GN6EjfFuGlwlflPmh0vjEM/createChatInviteLink",{"chat_id": "-1002117516354","member_limit":1})
    console.log(res["data"]["result"]["invite_link"])
  } 

  return (
    <div className="flex justify-center bg-zinc-900 h-screen overflow-hidden">
      <div className="flex flex-col h-screen w-screen text-left p-6 lg:max-w-[1000px]">
        <div className="bg-zinc-800 rounded-2xl p-4">
          <p className="font-semibold text-sm text-white/60">{`Success)`}</p>
          <p className="text-white font-bold text-3xl ">{text}</p>
        </div>
        <div className="text-center self-center mt-[10%] w-screen h-screen lg:max-w-[1000px]">
          <Button onClick={handleClick} className="w-[80%] h-[7%] bg-sky-500 text-white font-bold text-lg" size="lg" variant="secondary">Join channel</Button>
        </div>
      </div>
    </div>
  );
}