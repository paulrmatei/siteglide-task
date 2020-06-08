import React, {useState, useEffect} from 'react';
import { Menu, Layout } from 'antd';
import DogImages from './components/DogImages';
import breeds from './constants/breeds';
import './App.css';


const { Header, Footer} = Layout;

const App = () => {

  // Declare state
  const [images, setImages] = useState([]);
  const [breed, setBreed] = useState('labrador');

  // Fetch data from dog.ceo API
  useEffect(() => {
    const fetchData = async () => {
        const data = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`);
        data
        .json()
        .then(data => setImages(data.message))
    }
      
      fetchData();
  }, [breed]);

  return (
    <Layout className="App">

      {/* Header Menu with buttons */}
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>

          {/* render buttons with data from constants/breeds.js */}
          {breeds.map(({breedName}, index) => {
            // capitalize breed name
            let capitalizedBreed = breedName.charAt(0).toUpperCase() + breedName.slice(1);

            return (
              <Menu.Item key={index} onClick={() => setBreed(breedName)}>
                {capitalizedBreed}
              </Menu.Item>
            )
          })}
        </Menu>
      </Header>
        
      <DogImages images={images} breed={breed}/>

      <Footer>
        Cute dogs
      </Footer>        
    </Layout>
  );
}

export default App;