import "./App.css";

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <nav className="flex items-center justify-between p-4 bg-blue-800 text-white">
          <img src="images/shopping-basket.png" alt="Logo" className="h-7 invert" />
          <div className="space-x-5 flex">
            <a href="" className="hover:text-black">Home</a>
            <a href=""className="hover:text-black">Produtos</a>
            <a href=""className="hover:text-black">Sobre nós</a>
            <a href="" className="hover:invert">
                <img src="/images/cardapio.png" className="h-7 invert " />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
