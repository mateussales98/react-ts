import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Profile } from "./Profile";


export function Header() {
  return (
    <>
    <div className="w-auto bg-zinc-300 ">
      <div className="w-[1120px] h-[4.5rem] mx-auto flex items-center justify-between ">
        <Logo />
        <Nav />
        <Profile />
      </div>
    </div>
    </>
  )
}