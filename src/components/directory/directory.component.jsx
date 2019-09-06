import React from 'react';
import MenuItems from '../menu-item/menu-item.component';
import '../menu-item/menu-item.style.scss';
import './directory.style.scss';




class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'JACKETS',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'TOPS',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/tops'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                },
                
              ]

        }

    }


render() {

    return (

        <div className='directory-menu'>
            {
                this.state.sections.map(({title, id, imageUrl, size}) => (//use destructor i.e pass more than one value
                    <MenuItems key={id} title = {title} imageUrl = {imageUrl} size = {size}/>
                ))
            }

        </div>

    )
  }
}



export default Directory;