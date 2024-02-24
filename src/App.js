import { useState } from "react";
import Home from "./Home";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import AddWidget from "./components/addWidget";

function App() {
  const [addWidget, setAddWidget] = useState(false);
  const [widgetList,setWidgetList] = useState([1,2,3,4,5,6,7,8,9]);

  return (
    <div className="text-gray-600 bg-violet-100 h-screen">
      {
        addWidget ? <AddWidget setAddWidget={setAddWidget} /> : <></>
      }
      <Sidebar />
      <Navbar setAddWidget={setAddWidget} />
      <Home widgetList={widgetList}/>
    </div>
  );
}

export default App;
