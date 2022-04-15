import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    const { results, isLoading, getResults, searchTerm, setResults } = useResultContext();
    const location = useLocation();// gives you the ulr, ex: /news, /videos....

    useEffect(() => {
        if(searchTerm) {
            setResults('');
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
                <div className="flex flex-wrap  space-y-6 sm:px-56">
                    {results?.map(({ link, title, description }, index) => (
                        <div key={index} className="max-w-3xl w-full">
                            <a href={link} target="_blank" rel="noreferrer">{/*noreferrer link type hides referrer information when the link is clicked, no analytics data*/}
                                <p className="text-lg hover:underline dark:text-red-400 text-red-800">
                                    {title}
                                </p>
                                <div className="text-sm dark:text-gray-200 text-gray-700">
                                    {description && description?.length > 200 ? `${description.substring(0, 200)}...` : description}
                                </div>
                                <p className="text-sm dark:text-blue-300 text-blue-800">
                                    {link.length > 30 ? link.substring(0, 30) : link}{/*render only 30 chars if longer than 30*/}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case '/image':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.map(({ image, link: { href, title } }, index) => (
                        <a key={index} href={href} target="_blank" rel="noreferrer" className="sm:p-3 p-5">
                            <img src={image?.src} alt={title} loading="lazy" />{/*lazy loading only loads imgs within the viewport, performance*/}
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                     ))}
                </div>
            );
        case '/news':
            return (
                <div className="flex flex-wrap justify-between items-center space-y-6 sm:px-56">
                    {results?.map(({ links, id, source, title }) => (
                        <div key={id} className="max-w-2xl w-full">
                            <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                                <p className="text-lg dark:text-red-400 text-red-800">
                                    {title}
                                </p>
                            </a>
                            <div className="flex gap-4">
                                        <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline">
                                            {source?.href}
                                        </a>
                                    </div>  
                        </div>
                    ))}
                </div>
            );
        case '/videos':
            return (
                <div className="flex flex-wrap">
                    {results.map((video, index) => (
                        <div key={index} className="p-2">
                            {video?.additional_links?.[0].href && <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px"/>}
                        </div>  
                    ))}
                </div>
            )
        
    
        default:
            return 'error!';
    }

}