import './App.css';
import Login from "./Login";
import { Routes , Route} from "react-router-dom";
import Settings from "./Settings";


function App() {
  
  return (
    
<Routes>

<Route path="/" element={<Login />} />
<Route path="/Settings" element={<Settings />} />

</Routes>

  );
}

export default App;
