import logo from './logo.svg';
import { Routes } from './routes';
export default function Layout(){
    return{
        
    }
};
export function Nav(){
    return(
        <>
         <nav class="navbar bg-body-tertiary  bg-dark border-bottom border-body navbar-expand-lg  " data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
              Trader
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/feed">Feed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/homepage">userhome</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
            
          </div>
          
        </nav>
        </>
        
)
}