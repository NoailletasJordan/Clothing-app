import React from 'react';
import './Command.scss';

const OrderItem = (props) => {

    const content=props.cartItems.map(item=>(
        <div className="command__cart-item" key={item.id}>
            <div className="command__cart-item__image" style={{backgroundImage:`url(${item.imageUrl})`}}></div> 
            <div className="command__cart-item__wrapper">
                <div className="command__cart-item__name">{item.name}</div> 
                <div className="command__cart-item__number">
                {
                    item.number>1 ? `${item.number} x $${item.price}` : `$${item.price}`
                }
                </div> 
            </div> 
        </div>
    ))

    return (
        <div className='command'>
            <div className="command__header">
                {props.cartNumber} {props.cartNumber>=2 ?'items':'item'} ordered - {props.OrderedAt.toDate().toLocaleDateString("en-EN",{year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric' })}
            </div>
            <div className="command__container">
                {content}
            </div>
        <div className="command__total">Total : ${props.totalPrice}</div>
        </div>
    );
}

export default OrderItem;
