import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../Includes/Landingpage/Header";
import Diyoz from "../Landingpage/Diyoz";
import Dstories from "../Landingpage/Dstories";
import Landingpage from "../Landingpage/Landingpage";
import World from "../Landingpage/world";
import Categories from "../Landingpage/Categories";
import New from "../Landingpage/New";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<Header />}>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/Diyoz" element={<Diyoz />} />
                    <Route path="/Dstories" element={<Dstories />} />
                    <Route path="/D-world" element={<World />} />
                    <Route path="/Categories" element={<Categories />} />
                    <Route path="/New" element={<New />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
