import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          Pay<span>Pilot</span>
        </div>

        <div className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#transactions">Transactions</a>
          <a href="#reports">Reports</a>
        </div>
      </nav>

      <main className="container">
        <section className="hero">
          <div>
            <p className="tag">AI-POWERED FINANCE CONTROL</p>

            <h1>
              Your payments.
              <br />
              <span>Under control.</span>
            </h1>

            <p className="description">
              PayPilot helps businesses detect payment mismatches,
              duplicates, failures and reconciliation issues automatically.
            </p>

            <button className="primary-btn">
              Analyze Transactions
            </button>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <span>Payment Overview</span>
              <span className="status">● Live</span>
            </div>

            <div className="amount">₹1,24,850</div>

            <p className="muted">Total transactions analyzed</p>

            <div className="stats">
              <div>
                <strong>142</strong>
                <span>Transactions</span>
              </div>

              <div>
                <strong>6</strong>
                <span>Issues Found</span>
              </div>

              <div>
                <strong>97%</strong>
                <span>Reconciled</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="icon">↔</div>
            <h3>Smart Reconciliation</h3>
            <p>
              Automatically compare payment and order records to find
              mismatches.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">⚠</div>
            <h3>Issue Detection</h3>
            <p>
              Detect duplicate, failed and suspicious transactions before
              they become bigger problems.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">✦</div>
            <h3>AI Explanations</h3>
            <p>
              Get simple explanations of what went wrong and what action
              should be taken.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
