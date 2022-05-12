import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loadgin } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScheenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScheenshotTook  }: ScreenshotButtonProps) {

  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png');

    onScheenshotTook(base64Image)
    setIsTakingScreenshot(false)
  }

  

  if (screenshot){
    return (
      <button 
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-zinc-900 focus:ring-bg-brand-300 focus:ring-brand-500 " 
        onClick={() => onScheenshotTook(null)}
        style={{ 
          backgroundImage: `url(${screenshot})`,
          backgroundRepeat  : 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
      >

        <Trash weight="fill" className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-zinc-900 focus:ring-bg-brand-300 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loadgin /> : <Camera className=" w-6 h-6 text-zinc-100" />}
    </button>
  )
}