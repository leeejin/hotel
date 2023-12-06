import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './pages/mainpage_page';
import InquiryPage from "./pages/inquiryroom_page";
import Mypage from './pages/mypage_page';
import Login from './pages/login_page';
import Signup from './pages/signup_page';
import Inform from './pages/inform_page';

//아메시스트 : #9966CC 밝은 레드오렌지 : #ffb7b3
function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/InformPage" element={<Inform/>} />
        <Route path="/LoginPage" element={<Login/>} />
        <Route path="/SignupPage" element={<Signup/>} />
        <Route path="/InquiryPage" element={<InquiryPage/>} />
        <Route path="/MyPage" element={<Mypage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
