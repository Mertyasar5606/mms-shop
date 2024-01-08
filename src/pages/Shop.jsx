import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../shop.css"
import Button from 'react-bootstrap/Button';

function Shop() {
  const [shop, setShop] = useState([]);

  const getShop = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setShop(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getShop();
  }, []);

  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {shop?.map((item) => {
        const { id, title, price, image, description } = item;
        const truncatedDescription = truncateDescription(description, 100); // Buradaki 100, gösterilecek maksimum karakter sayısıdır, isteğinize göre değiştirebilirsiniz.
        return (
          <Card key={id} className="text-white w-[15rem] h-[27.5rem] bg-stone-400 ml-[3rem] mt-[5rem] ">
            <Card.Img variant="top" src={image} className="h-[13rem] w-[103rem]" />
            <Card.Body className='h-[15rem] w-[15rem]'>
              <Card.Title className='bg-black'>{title}</Card.Title>
              <Card.Text className='bg-gray-500'>{truncatedDescription}</Card.Text>
            </Card.Body >
            <ListGroup className="list-group-flush bg-gray-400 ">
              <ListGroup.Item className='mt-[-5.5rem]'>{price}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" className='text-black'>
                <Button className='btn btn-primary'>
                  Sepete Ekle
                </Button>
              </Card.Link>
              <Card.Link href="#" className='text-black' >
                <Button className='btn-btn-danger ml-3'>
                  Satın Al
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Shop;
