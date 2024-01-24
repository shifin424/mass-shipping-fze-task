import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/*" element={<UserRoutes />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
