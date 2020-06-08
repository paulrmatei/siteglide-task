
import React from 'react';
import { Layout } from 'antd';
import '../../App.css';

const { Content } = Layout;


const DogImages = ({images, breed}) => {
  return (
    <Content className='dog-images-container'>
      {images.map((item, index) => {
          return <img className='dog-images' key={index} src={item} alt={breed}/>;
      })}
    </Content>
  )
}


export default DogImages;