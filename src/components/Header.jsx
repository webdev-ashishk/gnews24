export default function Header() {
  return (
    <div className="text-white">
      <nav className="flex gap-5 text-[20px] font-bold  justify-center">
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
