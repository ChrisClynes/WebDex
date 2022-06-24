import React, { createContext, useContext, useState } from 'react';

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
const ResultContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

//note all react components have children props, this allows use to wrap this around any components to send props down through
export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    //to get results for search by type: videos, images...
    const getResults = async (type) => {
        setIsLoading(true);
        
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_GOOGLE_API_KEY
            }
        });
        const data = await response.json();

        //since results.entries causes a issue being that entries is a built-in function, we have to modify how we get the results
        if(type.includes('/news')) {
            setResults([data.entries]);
        }else if(type.includes('/image')) {
            setResults([data.image_results]);
        }else {
            setResults([data.results]);
        }
        console.log(data.results)
        setIsLoading(false);
    }
    return (
            // Use a Provider to pass the current data to the tree below.
            // Any component can read it, no matter how deep it is.
            //render all child components, "those that are wrapped"
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);
