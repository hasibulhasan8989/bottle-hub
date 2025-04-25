import './Bottle.css'

const Bottle = ({bottle,handleCart}) => {
  const  {name,price,category,seller,img}=bottle
    return (
        <div className='box'>
            <p>Name  :  {name} </p>
            <p>Price : {price} </p>
            <p>Seller : : {seller} </p>
            <p>Brand : {category} </p>
            
            <img src={img} alt="" />
            <br />
            <br />
            <button onClick={()=>handleCart(bottle)} >Add To Card</button>


        </div>
    );
};

export default Bottle;