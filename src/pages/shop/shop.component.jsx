import React from 'react';
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx'
import  './shop.style.scss'



class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }

    }

    render() {
        const {collections} = this.state;


        return (
            <div className = 'shop-page'>
                {
                    collections.map(({id, items, routeName, title}) => ( //or can replace with {id,...otheritems}
                        <PreviewCollection key={id} title = {title} items = {items} routeName = {routeName} /> //{...otheritems}

                    ))
                }
            </div>);
    }
}

export default ShopPage;
