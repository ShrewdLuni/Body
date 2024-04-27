"use client"

import { Button } from "@/components/ui/button"
import axios from "axios";
import { Copy, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {

  const [link,setLink] = useState("")

  let text = "Оплата прошла успешно!"
  let textLink = "Данная ссылка работает лишь единожды"

  useEffect(() => {
    handleClick()
  }, []);

  const handleClick = async() => {
    setLink(res["data"]["result"]["invite_link"])
  } 

  return (
    <div className="flex justify-center bg-zinc-900 h-screen w-screen pt-6 overflow-hidden">
      <div className="flex flex-col text-left w-[95%] lg:max-w-[1000px]">
          <p className="font-semibold text-sm text-white/60">{`Success)`}</p>
          <p className="text-white font-bold text-3xl ">{text}</p>
        <div className="bg-zinc-800 rounded-2xl p-4 mt-10 text-center">
          <div className="flex justify-center gap-x-2">
            <Button onClick={() => {navigator.clipboard.writeText(link)}} className="whitespace-normal" variant="link"><p className="text-white font-bold text-lg text-wrap lg:text-3xl">{link}</p></Button>
          </div>
          <div className="flex justify-center gap-x-2 items-center font-semibold text-sm text-white/60 mt-4">
            <TriangleAlert className="h-4 w-4"/>
            <p>{textLink}</p>
            <TriangleAlert className="h-4 w-4"/>
          </div>
        </div>
      </div>
    </div>
  );
}