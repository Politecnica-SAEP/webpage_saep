import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/main'

export default function Routes() {

    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact/>
        </BrowserRouter>
    )
}