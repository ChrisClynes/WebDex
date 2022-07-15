import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routing } from './components/Routing';

import { ResultContextProvider } from './contexts/ResultContextProvider';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <BrowserRouter>
            <ResultContextProvider>
                <div className={darkTheme ? 'dark' : ''}>
                    {/*Tailwind CSS className Styles, in dark mode*/}
                    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                        <Routing />
                        <Footer />
                    </div>
                </div>
            </ResultContextProvider>
        </BrowserRouter>
    );
}

export default App;