import React from 'react'
import './preview-collection.styles.scss'
import CollectionItem from '../../components/collection-item/collection-item'

const PreviewCollection = ({title, items})=>(
    <div className = 'preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {
                items
                .filter((item, index) => index < 4) //this filters to the first 4 items from the tems list
                .map((items) =>( //spread the items in the items array from shop.data.jsx
                    <CollectionItem key={items.id} item = {items}/>
                ))
            }
        </div>
    </div>

);



export default PreviewCollection;