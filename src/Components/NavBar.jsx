const NavBar = ({ setCategory }) => {
  return (
    <nav className=" navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid ms-5">
        <a className="navbar-brand fw-bold" href="/">
          NewsNow
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setCategory("technology")}
              >
                Technology
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setCategory("business")}
              >
                Business
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setCategory("health")}
              >
                Health
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setCategory("sports")}
              >
                Sports
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
