import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./site/Header";
import Main from "./site/Main";
import Footer from "./site/Footer";

function App() {
    return (
        <div className="App">
            <Header title={'Header shmider'}/>
            <Main content={'yo yoy oyoyoy'}/>
            <Footer contacts={'phones'} />
        </div>
    );
}

export default App;
