import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Login } from "./pages/Login/Login";
import {Weddingcategr} from './pages/Weddingcategories/Weddingcategr'
import { Dropdownmenu } from "./components/Dropdownmenu/Dropdownmenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Gridview } from "./components/Gridview/Gridview";
import {Breedcrup} from "./components/Breedcrup/Breedcrup";
import { Cardview } from "./components/Cardview/Cardview";
import { Photos } from "./components/Photos/Photos";
import { Realwedding } from "./components/Realwedding/Realwedding";
import { Blog } from "./components/Blog/Blog";
import {Blogdetails} from "./components/Blogdetails/Blogdetails";
import { Review } from "./pages/Review/Review";
import './App.css';
import { Shop } from "./components/Shop/Shop";
import { Genieservice } from "./pages/Genieservice/Genieservice";
import { Invite } from "./pages/Invites/Invite";
import {Allfunctionphotos} from "./components/Allfunctionphotos/Allfunctionphotos";
import { Chatbox } from "./components/Chatbox/Chatbox";
import { Wedsta } from "./pages/Wedsta/Wedsta";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="Weddingcategories" element={<Weddingcategr/>} />
          <Route path="Chatbox" element={<Chatbox/>} />
          <Route path="Dropdownmenu" element={<Dropdownmenu/>} />
          <Route path="breedcrup" element={<Breedcrup/>} />
          <Route path="Gridview" element={<Gridview/>} />
          <Route path="Cardview" element={<Cardview/>} />
          <Route path="Photos" element={<Photos/>} />
          <Route path="Realwedding" element={<Realwedding/>} />
          <Route path="Blog" element={<Blog/>} />
          <Route path="Blog/Blogdetails" element={<Blogdetails/>} />
          <Route path="Review" element={<Review/>} />
          <Route path="Shop" element={<Shop/>} />
          <Route path="Genieservices" element={<Genieservice/>} />
          <Route path="Invite" element={<Invite/>} />
          <Route path="Allfunctionphotos" element={<Allfunctionphotos/>} />
          <Route path="Wedsta" element={<Wedsta/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
