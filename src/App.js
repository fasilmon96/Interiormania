import "bootstrap/dist/css/bootstrap.min.css";
import Naves from "./Components/Navbar/Naves";
import Ban from "./Components/Banner/Ban";
import { phonesData } from "./Components/Files";
import { phonesData1 } from "./Components/Files";
import { phonesData2 } from "./Components/Files";
import { phonesData3 } from "./Components/Files";
import { phonesData4 } from "./Components/Files";


import "./App.css";
import Poster from "./Components/Poster/Poster";

function App() {
  return (
    <div className="App">
      <Naves />
      <Ban />
     < Poster phonesData={phonesData} name='BEDROOM'  />
     <Poster phonesData={phonesData1} name='LIVING'  />
     <Poster phonesData={phonesData2} name='DINING'/>
     <Poster phonesData={phonesData3} name='COUTYARD' />
     <Poster phonesData={phonesData4} name='KITCHEN' />
    </div>
  );
}

export default App;
