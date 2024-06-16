import { useState } from "react";
export default function Header() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="text-white">
      <h3>header.jsx rendered!</h3>
      <input
        type="text"
        placeholder="search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
}
