import logo from './logo.svg';
import './App.css';
import Layout from './layout';
import Log from './Home';
import {Nav} from "./layout";
import ProductCard from './feed';
import ProductList from './list';
import AppRoutes from './routes';
import "./user.css"


function App() {
  return (
  
    <>
      
    <Nav/>
    
      <div className="App">
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </head>
        <AppRoutes className="App-header"/>
       
        
      </div>
    </>
  );

}

export default App;
