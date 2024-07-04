import Main from "./pages/Main";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main/>}></Route>
        <Route path="/add" element={<AddBook />}></Route>
        <Route path="/update/:id" element={<UpdateBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
