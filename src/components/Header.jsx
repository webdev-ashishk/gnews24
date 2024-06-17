import { useState } from "react";
export default function Header() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="text-white">
      <input
        type="text"
        placeholder="search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        className="text-white w-[300px] h-[50px] m-2 pl-5 text-2xl border-2 rounded-sm"
      />
    </div>
  );
}
