import { useState } from "react";
export default function Header() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="text-white">
      <nav className="flex gap-5 text-[20px] font-bold  justify-center">
        {/* <ul className="">
          <li>Logo</li>
        </ul> */}
        {/* <ul className="flex justify-center items-center gap-14">
          <li>Home</li>
          <li>about</li>
          <li>Contact</li>
        </ul> */}
        <input
          type="text"
          placeholder="search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="text-white w-[400px] h-[100px] m-2 pl-5 text-2xl border-2 rounded-sm mr-16"
        />
      </nav>
    </div>
  );
}
