import React from 'react';
import { Link } from 'react-router';

export const MenuItem = ({ link, icon, content }) => {
    return(
        <li className="nav-item">
            <Link to={`/${link}`} className="nav-link">
                <i className={`now-ui-icons ${icon}`}></i>
                {content}
            </Link>
        </li>
    );
}