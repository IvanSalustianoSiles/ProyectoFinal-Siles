import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import { AppRouter } from "./router/AppRouter";
import "./App.css"
const App = () => {
  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
        <AppRouter/>
      </CartContextProvider>
    </BrowserRouter>
    </>
)}

export default App;