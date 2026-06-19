import "./App.css";

function HomePage() {
  return (
    <section id="home" className="hero">
      <div className="heroBox">
        <p className="eyebrow">DIMERA PARKING ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.</p>

        <h1>Parking slots made simple.</h1>

        <div className="company-info">
          <div className="company-grid">
            <span>Αριθμός ΓΕΜΗ</span>
            <strong>193139804000</strong>

            <span>EUID</span>
            <strong>ELGEMI.193139804000</strong>

            <span>Διακριτικοί Τίτλοι</span>
            <strong>DIMERA PARKING / DIMERA PARKING</strong>

            <span>Επωνυμία με λατινικούς χαρακτήρες</span>
            <strong>DIMERA PARKING SINGLE MEMBER P.C.</strong>

            <span>ΑΦΜ</span>
            <strong>803254241</strong>

            <span>Ημ/νία Σύστασης</span>
            <strong>17/04/2026</strong>

            <span>Νομική Μορφή</span>
            <strong>ΙΚΕ</strong>

            <span>Κατάσταση</span>
            <strong>Ενεργή από 17/04/2026</strong>

            <span>Διεύθυνση</span>
            <strong>
              ΜΙΚΡΑΣ ΑΣΙΑΣ 1, ΘΕΣΣΑΛΟΝΙΚΗ, ΘΕΣΣΑΛΟΝΙΚΗΣ / ΘΕΣΣΑΛΟΝΙΚΗΣ, 54623
            </strong>
          </div>
        </div>

        <button className="cta" type="button">
          Coming Soon
        </button>
      </div>
    </section>
  );
}

function CompanyPage() {
  return (
    <section className="page">
      <div className="pageBox">
        <h1>DIMERA PARKING ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.</h1>

        <div className="pageBlock">
          <h2>Στοιχεία Κεφαλαίου</h2>

          <div className="details-grid">
            <span>Κεφάλαιο</span>
            <strong>10.000,00 €</strong>

            <span>Είδος Μετοχών</span>
            <strong>Κεφαλαιικές</strong>

            <span>Αριθμός Μετοχών</span>
            <strong>100</strong>

            <span>Αξία</span>
            <strong>100,00 €</strong>
          </div>
        </div>

        <div className="pageBlock">
          <h2>Contact Information</h2>

          <div className="details-grid">
            <span>E-mail</span>
            <strong>
              <a href="mailto:v.tsitsilianos@dimeragroup.eu">
                v.tsitsilianos@dimeragroup.eu
              </a>
            </strong>
          </div>
        </div>

        <div className="pageBlock">
          <h2>Διοίκηση</h2>

          <div className="managementList">
            <div className="managementItem">
              <div>
                <span className="label">Εταίροι/Άλλα Μέλη</span>
                <strong>DIMERA LAND AND PROPERTY INVESTMENTS LTD</strong>
              </div>

              <div>
                <span className="statusBadge">Ενεργός</span>
                <p>Θητεία από 17/04/2026 έως ...</p>
              </div>

              <div>
                <span className="label">Κατηγορία</span>
                <strong>Εταίροι</strong>
              </div>

              <div>
                <span className="label">Ιδιότητα</span>
                <strong>Μοναδικός Εταίρος</strong>
              </div>

              <div>
                <span className="label">Ποσοστό</span>
                <strong>100%</strong>
              </div>
            </div>

            <div className="managementItem">
              <div>
                <span className="label">Εταίροι/Άλλα Μέλη</span>
                <strong>DAVIDIAN ARTUR</strong>
              </div>

              <div>
                <span className="statusBadge">Ενεργός</span>
                <p>Θητεία από 17/04/2026 έως ...</p>
              </div>

              <div>
                <span className="label">Κατηγορία</span>
                <strong>Λοιπές ιδιότητες διοίκησης</strong>
              </div>

              <div>
                <span className="label">Ιδιότητα</span>
                <strong>Διαχειριστής</strong>
              </div>

              <div>
                <span className="label">Ποσοστό</span>
                <strong>-</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <section className="page">
      <div className="pageBox">
        <h1>Privacy</h1>

        <p>
          This website is currently under development. More information will be available soon.
        </p>
      </div>
    </section>
  );
}

function App() {
  const path = window.location.pathname;

  let page = <HomePage />;

  if (path === "/company") {
    page = <CompanyPage />;
  }

  if (path === "/privacy") {
    page = <PrivacyPage />;
  }

  return (
    <main className="site">
      <div className="overlay" />

      <header className="header">
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/company">Company</a>
          <a href="/privacy">Privacy</a>
        </nav>

        <a href="/" className="logoWrap" aria-label="Limani Parking home">
          <img src="/logo.png" alt="Limani Parking logo" className="logo" />
        </a>
      </header>

      {page}
    </main>
  );
}

export default App;