import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} box-list__item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='box-list__image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='box-list__content'>
            <h1 className='box-list__title'>{title.toUpperCase()}</h1>
            <span className='box-list__desc'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
