import { useState } from 'react';


const [isWidgetOpen, setIsWidgetOpen] = useState(false)

function toogleWidgetVisibility(){
  setIsWidgetOpen(!isWidgetOpen)
}
{ isWidgetOpen && <p>Welcome</p> }

interface ButtonProperty{
  text?: string;
}

function Button(props: ButtonProperty){
  return <button className="bg-violet-500 px-4 h-10 rounded text-violet-200 hover:bg-violet-700 transition-all ">{props.text ?? 'Default'}</button>
}

function Props() {
  return (
   <div className="flex gap-2">
     <Button text="Enviar"/>
     <Button text="OK"/>
     <Button />
   </div>
  )
}   

export default Props
