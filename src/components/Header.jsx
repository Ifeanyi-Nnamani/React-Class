import './App.css';

function Header() {
  return (
    <header>
      <h1>My Website</h1>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}

export default Header;

