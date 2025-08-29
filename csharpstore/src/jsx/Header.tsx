import '../css/App.css';

function Header() {
  return (
    <div className="Header">
      <header className="block App-header">
        <nav className="flex items-center justify-between p-4 bg-cyan-700 text-white fixed top-0 left-0 right-0 z-50 shadow-md">
          <a href="#">
            <img src="images/shopping-basket.png" alt="Logo" className="h-7 invert" />
          </a>
          <div className="space-x-5 flex">
            <a href="" className="hover:text-black transition-colors duration-200">Home</a>
            <a href=""className="hover:text-black transition-colors duration-200">Products</a>
            <a href=""className="hover:text-black transition-colors duration-200">Contact</a>
            <a href="" className="hover:invert">
            <img src="/images/cardapio.png" className="h-7 invert transition-colors duration-200" />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
