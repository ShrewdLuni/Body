"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  let text = "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  const handleClick = async() => {
    console.log(1)
    router.push(`/success`) 
  } 

  return (
    <div className="flex justify-center bg-zinc-900 h-screen">
      <div className="grid-row-[1fr,1fr] h-screen text-left p-6 lg:max-w-[1000px]">
        <div className="">
          <p className="font-semibold text-sm text-white/60">Subscription</p>
          <p className="text-white font-bold text-3xl">₽790 per month</p>
          <div className="bg-zinc-800 p-2 rounded-2xl mt-[4%] lg:p-4">
            <p className="font-semibold text-md text-white">
              {text}
            </p>
          </div>
        </div>
        <div className="fixed text-center bottom-[10%] w-screen origin-center left-0 lg:max-w-[1000px] lg:static lg:mt-[10%]">
          <Button onClick={handleClick} className="w-[80%] bg-sky-500 text-white font-bold text-base" size="lg" variant="secondary">Continue</Button>
        </div>
      </div>
    </div>
  );
}
