// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Krepselis from "./components/krepselis/krepselis";
import Footer from "./components/footer";
import TasksContext, {TaskContextProvider} from "./components/context/productsContext";



function App() {
  return (
      <div className="container">
          <TaskContextProvider>
              <Krepselis></Krepselis>
              <nav className="navbar fixed-bottom bg-body-tertiary">
                  <div className="container-fluid">
                      <Footer></Footer>
                  </div>
              </nav>
          </TaskContextProvider>
      </div>
  );
}

export default App;

