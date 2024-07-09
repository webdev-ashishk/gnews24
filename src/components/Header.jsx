export default function Header() {
  return (
    <div className="text-white text-3xl w-full h-full border-2 border-red-500 bg-blue-700">
      <nav className="flex gap-5 font-bold  justify-between border-2 w-[80%] ml-[10%] p-4">
        <ul className="">
          <li>Logo</li>
        </ul>
        <ul className="flex justify-center items-center gap-14">
          <li>Home</li>
          <li>about</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
