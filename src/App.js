import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Header from './components/Header.js' 
import TrackedItems from './components/TrackedItems'
// import { application_name } from 'pg/lib/defaults';


function App() {
  return (
    <div className="App">
      <div className='headerBackground'>
      <h5 className='headerText'>Price Tracker</h5>

      
      </div>
      <div className='dataContaner'>
      <div></div>
      </div>
      <TrackedItems />
    </div>
  );
}



export default App;
