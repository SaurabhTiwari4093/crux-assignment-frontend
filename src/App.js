import { useState } from "react";
import Home from "./Home";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import AddWidget from "./components/addWidget";

function App() {
  const [addWidget, setAddWidget] = useState(false);
  const [widgetList, setWidgetList] = useState(["bar", "line"]);

  return (
    <div className="text-gray-600 bg-violet-100 h-screen">
      {
        addWidget ? <AddWidget setAddWidget={setAddWidget} widgetList={widgetList} setWidgetList={setWidgetList} /> : <></>
      }
      <Sidebar />
      <Navbar setAddWidget={setAddWidget} />
      <Home widgetList={widgetList} />
    </div>
  );
}

export default App;
