import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/Categories/CategoryDetails";
const App = () => {
    return (
        <div>
            <CssBaseline />
          <Router>
            <Box sx={{bgcolor:(theme)=>theme.palette.background.default,
                      minHeight:"100nh"}}
            />
            <Routes>
                <Route path="/categories"  element={<Categories/>} />
                <Route path="/categories/create"  element={<CategoryDetails/>} />
            </Routes>
          </Router>
        </div>
    );
};

export default App;
