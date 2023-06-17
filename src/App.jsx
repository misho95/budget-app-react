import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./home";
import AddInvoice from "./addinvoice";
import ErrorPage from "./errorPage";

function App() {

  const localTheme = localStorage.getItem('theme');
  const [ theme, setTheme ] = useState(localTheme ? JSON.parse(localTheme) : true);
  const localInv = localStorage.getItem('invoice');
  const [ inv, setInv ] = useState(localInv ? JSON.parse(localInv) : []);

  const darkMode = () => {
    setTheme(!theme);
  }

  useEffect( () => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const setNewData = (newInvoice) => {
    setInv([...inv, newInvoice]);
  }

  useEffect( () => {
    localStorage.setItem('invoice', JSON.stringify(inv));
  }, [inv]);

  const deleteInv = (id) => {
   const deleteData = inv.filter( (inv) => {
      if(inv.id !== id) return inv;
    });

    setInv(deleteData);
}

  return (
    <>
      <Header darkMode={darkMode} theme={theme}/>
      <BrowserRouter>
        <Routes>
            <Route path="./budget-app/" element={<Home data={inv} deleteInv={deleteInv} />} />
            <Route path="./budget-app/addinvoice" element={<AddInvoice setNewData={setNewData} />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
