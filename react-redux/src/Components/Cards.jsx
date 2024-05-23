import React,{useState,useContext}from 'react'
import {UserContext} from '../utils/UserContextComponent'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cards() {
  const{products,setProducts}=useContext(UserContext)
  

  return <>
  <div className='container my-4'>
   <div className="text-center" id="container">
    {
      products.map((e,i)=>{
let [quantity,setQuantity]=useState(0)
       
const addQuantity=()=>{
setQuantity(quantity+1)
}

  
const removeQuntity=()=>{
    setQuantity(quantity-1 && quantity===0)
}
const Addtocard=()=>{
    setQuantity(quantity+1)  
}

  return (<Card className='col-lg-4 mb-4'id='card'>
      
        <Card.Img variant="top"className="rounded mx-auto d-block"  id="image" src={e.thumbnail} alt=""/>
        <Card.Body>
          <Card.Title className="card-text text-primary" style={{fontWeight:"bolder"}}>{e.title}</Card.Title>
          <Card.Text >{e.description} </Card.Text>
        <ListGroup className=" card-list flush"  style={{textAlign:"center",fontWeight:"bolder"}}>
      <p>Price:${e.price}</p>
      <p className="card-text text-success">Discount:${e.discountPercentage}%</p>
      <div>Ratings: <p className='card-text text-warning'>{e.rating}/5*</p></div>
      <p>Stocks: {e.stock}</p>
      <p className="card-text text-primary">Brand: {e.brand}</p>
      <p>Category: {e.category}</p>
    </ListGroup> 
    <Card.Body>
      <div className="d-flex flex-row  align-items-center justify-content-center">
    <Button variant="outline-success" className='text-center' onClick={()=>addQuantity()}>+</Button>
      <div className='text-center'>{quantity}</div>
      <Button variant="outline-danger" className='text-center' onClick={()=>removeQuntity()}>-</Button>
     </div>
      <div><p>Total Amount:${e.price*quantity}</p></div>
      </Card.Body>
      <div className='text-center'>
      {
                                    quantity?<Button variant="primary" onClick={()=>Addtocard() .setQuantity(true) }
                                    >
                                        Add to cart
                                        </Button>:
                                        <Button variant='success' onClick={()=>Addtocard() .setQuantity()}
                                        >
                                       Buy Now
                                        </Button>
                                    }
       </div>
      </Card.Body> 
      </Card>
   
 )
})}
 </div>
 </div>
  </>
}

export default Cards