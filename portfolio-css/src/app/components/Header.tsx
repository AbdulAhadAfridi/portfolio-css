

import Link from 'next/link';


const Header = () => {
  return (
    <header className="header">
  <div className="container">
    <div className="header-content">
      <div className="logo">Abdul Ahad</div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</header>

  )
}

export default Header
    