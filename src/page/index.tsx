import React, { useState } from 'react';
import SignUp from '../components/signUp';
import SignIn from '../components/signIn';
import Dashboard from './dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const [signIn, setSignIn] = useState(false)

  function handleRouteToDashboard() {
    return <Route path="dashboard" element={<Dashboard />} />

  }

  return (
    <div className=''>
      {/* <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {signIn ? <SignIn handleSignIn={(value: boolean) => { setSignIn(value); } } handleRouteToDashboard={ (route: string) => {handleRouteToDashboard()} }  /> : <SignUp handleSignIn={(value: boolean) => { setSignIn(value); } } handleRouteToDashboard={ (route: string)=> {} } />}
      {/* This dashboard component */}
     
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
