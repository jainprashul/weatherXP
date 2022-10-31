import React, { useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import { API_CURRENT_WEATHER_BY_COORDS, API_FORECAST_WEATHER_BY_COORDS } from './constant';
import { getCurrentLocation } from './utils';

function App() {


  return (
    <div className="App">
        {/* <SideBar/>
        <Dashboard/> */}
    </div>
  );
}

export default App;
