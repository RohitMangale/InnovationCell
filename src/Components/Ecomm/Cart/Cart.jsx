import React from 'react'
import './Cart.css'

import Product1 from '../../../assets/arduino.png'


const Cart = () => {
  return (
    <div>
      
    <section id="page-header" class="about-header">       
    <h2>#cart</h2>       
    <p>Add your coupon code & SAVE upto 70%!</p>    
</section>

<section id="cart" class="section-p1">
    <table width="100%">
        <thead>
            <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
                <td><img src={Product1} alt=""/></td>
                <td>Arduino Uno</td>
                <td>$133.29</td>
                <td><input type="number"  /></td>
                <td>$133.29</td>
            </tr>
            <tr>
                <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
                <td><img src={Product1} alt=""/></td>
                <td>Arduino Uno</td>
                <td>$133.29</td>
                <td><input type="number" /></td>
                <td>$133.29</td>
            </tr>
            <tr>
                <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
                <td><img src={Product1} alt=""/></td>
                <td>Arduino Uno</td>
                <td>$133.29</td>
                <td><input type="number"  /></td>
                <td>$133.29</td>
            </tr>
        </tbody>
    </table>
</section>

<section id="card-add" class="section-p1" >
    <div id="coupon">
        <h3>Apply Coupon</h3>
        <div>
            <input type="text" placeholder="Enter Your Coupon"/>
            <button class="normal">Apply</button>
        </div>
    </div>

    <div id="subtotal">
        <h3>Cart Total</h3>
        <table>
            <tr>
                <td>Cart Subtotal</td>
                <td>$ 399.87</td>
            </tr>
            <tr>
                <td>Shipping</td>
                <td>Free</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>$ 399.87</strong></td>
            </tr>
        </table>
        <button class="normal">Procced to checkout</button>
    </div>
</section>
    </div>
  )
}

export default Cart
