import React, {useState,useEffect} from 'react';
import Item from "../item/Item";
import './DirectoryMenu-styles.scss'

const DirectoryMenu = () => {

  const [section, setSection] = useState([]);

  useEffect(() => {
      setSection([
          {
            title: 'hats',
            imageUrl: 'https://clothing-app-856be.firebaseapp.com/img/hats.webp',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'jackets',
            imageUrl: 'https://clothing-app-856be.firebaseapp.com/img/jackets.webp',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'sneakers',
            imageUrl: 'https://clothing-app-856be.firebaseapp.com/img/sneakers.webp',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'womens',
            imageUrl: 'https://clothing-app-856be.firebaseapp.com/img/womens.webp',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'mens',
            imageUrl: 'https://clothing-app-856be.firebaseapp.com/img/mens.webp',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }
    ])    
  }, []);



    return (
      <div className="directory-menu">
        {
          section.map(section => (
            <Item 
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
            linkUrl={section.linkUrl}
            />
          ))
        }
      </div>
    );
}

export default DirectoryMenu;
