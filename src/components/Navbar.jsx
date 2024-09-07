import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("about");
 
  const navLinks = [
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "work", name: "Work" },
  ];
  return (
    <div className="bg-white rounded-full border-2 w-[25%] h-14 border-slate-300 opacity-90">
      <ul className="grid grid-cols-4 items-center justify-center">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`font-bold cursor-pointer flex justify-center items-center rounded-full h-14 ${
            menu == link.id ? "bg-black text-white border" : ""
          }`}
          onClick={()=>setMenu(link.id)}
        >
          {link.name}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Navbar;
