import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routers";

function App() {
  return (
    <div className="common">
      <div className="h-screen w-screen bg-white">
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;