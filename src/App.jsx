import "./App.css";

function App() {
  return (
    <main className="site">
      <div className="overlay" />

      <header className="header">
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy</a>
        </nav>

        <a href="#home" className="logoWrap" aria-label="Limani Parking home">
          <img src="/logo.png" alt="Limani Parking logo" className="logo" />
        </a>
      </header>

      <section id="home" className="hero">
        <div className="heroBox">
          <p className="eyebrow">Smart Parking Management</p>

          <h1>Parking slots made simple.</h1>

          <div className="description">
            <p>Reserve, manage, and monitor available parking spaces with ease.</p>
            <p>Built for ports, airports, business centers, and private facilities.</p>
            <p>A modern parking platform designed for fast access and smooth operations.</p>
          </div>

          <button className="cta" type="button">
            Coming Soon
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;