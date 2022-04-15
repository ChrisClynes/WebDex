import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { url: '/search', text: 'All' },
    { url: '/news', text: 'News' },
    { url: '/image', text: 'Images' },
    { url: '/videos', text: 'Videos' },
  ];

export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4 pb-2">
            {links.map(({ url, text }, index) =>(
                <NavLink key={index} to={url} activeclassname="text-red-700 border-b-2 dark: text-red-300 border-red-700 pb-2">
                    {text}
                </NavLink>
            ))}
           
        </div>
    );
}