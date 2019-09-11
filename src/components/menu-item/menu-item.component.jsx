import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom'


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>(
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}> {/*so this matches to main url and adds {linkUrl} to it*/}

        <div className = 'backgroundImg' style = {{
        backgroundImage : `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)


export default withRouter(MenuItem);