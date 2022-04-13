import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routing } from './components/Routing';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <BrowserRouter>
            <div className={darkTheme ? 'dark' : ''}>
                <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">{/*Tailwind CSS className Styles, in dark mode, set to darker color*/}
                    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                    <Routing />
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;