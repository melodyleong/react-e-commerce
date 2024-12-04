import React from 'react';
import { useCart } from './CartStore';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';
import { useJwt } from './UserStore';

export default function ProductCard(props) {

    const { addToCart } = useCart();
    const [, setLocation] = useLocation();
    const { showMessage } = useFlashMessage();
    const { getJwt } = useJwt();

 const handleAddToCart = async () => {
const jwt = getJwt(); 
try { 
  console.log(props.id); 
  const response = await axios.post( 
    `${import.meta.env.VITE_API_URL}/api/cart`, 
    {  
      cartItems: [ 
        { product_id: props.id, quantity: 1 }
      ]  
    }, 
    { 
      headers: { 
        Authorization: `Bearer ${jwt}`, 
      }, 
    } 
  );
} catch (error) { 
  console.log(props.id); 
  console.error('Error adding to cart:', error.response?.data || error.message); 
}



    addToCart(props);
    showMessage('Item added to cart', 'success');
    setTimeout(() => {
        setLocation('/cart');
    }, 200); // 2000 milliseconds = 2 seconds
};

    return (
        <div className="card">
            <img
                src={props.imageUrl}
                className="card-img-top"
                alt={props.productName}
            />
            <div className="card-body">
                <h5 className="card-title">{props.productName}</h5>
                <p className="card-text">{props.price}</p>
                <button className="btn btn-primary" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};