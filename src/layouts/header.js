/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = () => {
    return (
    <header className="bg-white bg-opacity-5 shadow-lg hidden md:block">
  <div className="container mx-auto flex items-center h-24">
    <a href="" className="flex items-center justify-center">
      <span className="ml-4 uppercase font-black">CITY-TOUR</span>
    </a>
    <nav className="contents font-semibold text-base lg:text-lg">
      <ul className="mx-auto flex items-center">
        <li className="p-5 xl:p-8 active hover:border border-teal-500 hover:bg-teal-500 hover:text-white rounded">
          <a href="">
            <span>Home</span>
          </a>
        </li>
        <li className="p-5 xl:p-8 active hover:border border-teal-500 hover:bg-teal-500 hover:text-white rounded">
          <a href="">
            <span>About</span>
          </a>
        </li>
        <li className="p-5 xl:p-8 active hover:border border-teal-500 hover:bg-teal-500 hover:text-white rounded">
          <a href="">
            <span>Cars</span>
          </a>
        </li>
        <li className="p-5 xl:p-8 active hover:border border-teal-500 hover:bg-teal-500 hover:text-white rounded">
          <a href="">
            <span>Services</span>
          </a>
        </li>
        <li className="p-5 xl:p-8 active hover:border border-teal-500 hover:bg-teal-500 hover:text-white rounded">
          <a href="">
            <span>More</span>
          </a>
        </li>
      </ul>
    </nav>
    <button className="rounded-full font-bold px-4 py-2 hover:border border-teal-500 hover:bg-teal-500 hover:text-white">Sign in</button>
  </div>
</header>
    );
}

export default Header;