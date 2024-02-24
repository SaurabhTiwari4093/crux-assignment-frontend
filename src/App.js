import { useState } from "react";
import Home from "./Home";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import AddWidgets from "./components/addWidgets";

function App() {
  const [addWidgets, setAddWidgets] = useState(false);

  return (
    <div className="text-gray-600 bg-violet-100 h-screen w-screen">
      {
        addWidgets ? <AddWidgets setAddWidgets={setAddWidgets} /> : <></>
      }
      <Sidebar />
      <Navbar setAddWidgets={setAddWidgets} />
      <Home />
    </div>
  );
}

export default App;
