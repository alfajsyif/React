import './App.css';
import DeviceDetails from './components/DeviceDetails/DeviceDetails';
import Watch from './components/Watch/Watch';
import Device from './Device';

function App() {
  return (
    <div className="App">
     <Device name="iphone" price="$1300"></Device>
     <Watch></Watch>
    </div>
  );
}

export default App;
