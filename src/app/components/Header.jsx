import Logo from "./Logo";
import { LuBell } from "react-icons/lu";

const Header = () => {
  return (
    <header className="flex justify-between items-center pb-3 pt-6">
      <Logo />
      <LuBell className="size-7" />
    </header>
  );
};

export default Header;
