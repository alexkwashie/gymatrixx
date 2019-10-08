import React from 'react'
import './collection-item.styles.scss';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';


const CollectionItem = ({id,name,price,imageUrl}) =>(
    <div className='collection-items'>
        <div className = 'image'
             style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className= 'collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
<CustomButton inverted> Add to Cart </CustomButton> {/*add custom button with the props*/}
    </div>
)


 
export default CollectionItem;