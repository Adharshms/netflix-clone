import React from 'react';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="app-container">
      <Home />
      <Navbar/>
    </div>
  );
}

export default App