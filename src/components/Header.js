import '../styles/Header.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <div>
          <nav className="navbar navbar-expand-lg header-nav navbar-fluid">
      <ul className="navbar-nav mr-auto d-flex justify-content-around w-100">
        <li className="nav-item">
          <i className="bi bi-telephone"></i> Un conseil ? 01 71 68 17 97
        </li>
        <li className="nav-item">
          <i className="bi bi-headset"></i> Lun-Ven: 9h-18h / Sam: 9h-12h
        </li>
        <li className="nav-item">
          <i className="bi bi-envelope"></i> serviceclient@sdiexpertise.com
        </li>
      </ul>
    </nav>
<header className="container">


    <nav className="navbar navbar-expand-lg">
        <img src={logo} alt="sdie expertise" id="logo" />
        
        <button className="navbar-toggler mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto offset-3 fw-bold w-100 d-flex justify-content-around" id="nav-fs">
                
                <li className="nav-item"><Link to="/diagnostic" className=' text-decoration-none'>Diagnostic immobilier</Link></li>
                <li className="nav-item dropdown">
                    
                        Etudes et contrôles
                    
                    <ul className="dropdown-menu">
                        <li>Bureau d'études</li>
                        <li>Bureau de contrôle</li>
                    </ul>
                </li>
                <li>Actualités</li>
                <li>Contact</li>
              
                <li><Link to="/parrainage" className=' text-decoration-none'>Parrainage</Link></li>


                
            </ul>
        </div>
    </nav>
</header>







    </div>
  )
}