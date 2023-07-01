import NavBar from "./components/NavBar";
import AuthProvider from "./context/Auth";
import Authentication from "./pages/Authentication";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-slate-900 h-screen">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<Authentication />} />
            <Route path="/my-posts" element={<NavBar />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
