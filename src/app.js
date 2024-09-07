import React from "react";
import ReactDOM from "react-dom/client"
import HomePage from "./homePage";

const AppLayout = () => {
    return (
        <div className="App">
            <HomePage />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)