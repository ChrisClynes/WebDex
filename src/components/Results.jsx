import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();// gives you the ulr, ex: /news, /videos....

    useEffect(() => {
        if(searchTerm) {
            if(location.pathname == '/videos') {
                getResults(`/search/q=${searchTerm} videos`);
            }else {
                getResults(`${location.pathname}/q=${searchTerm}&num=50`)//num=50 is the number of results
            }   
        }
    }, [searchTerm, location.pathname]);

    if(isLoading) return <Loading />;
    console.log(location.pathname)

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.results?.map(({ link, title, description }, index) => (
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-lg hover:underline dark:text-red-400 text-red-800">
                                    {title}
                                </p>
                                <div className="text-sm dark:text-gray-200 text-gray-700">
                                    {description.length > 200 ? description.substring(0, 200) : description}
                                </div>
                                <p className="text-sm dark:text-blue-300 text-blue-800">
                                    {link.length > 30 ? link.substring(0, 30) : link}{/*render only 30 chars if longer than 30*/}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )
        case '/image':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.image_results?.map(({ image, link: { href, title } }, index) => (
                        <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                            <img src={image?.src} alt={title} loading="lazy" />{/*lazy loading only loads imgs within the viewport, performance*/}
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                     ))}
                </div>
            );
        case '/news':
            return 'SEARCH';
            break;
        case '/videos':
            return 'SEARCH';
            break;
        
    
        default:
            return 'error!';
    }

}