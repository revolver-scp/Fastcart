import React from 'react'

const Footer = () => {
  return (
    <div className='foot'>
      <div className="foter">
        <div>
            <h1>Exclusive</h1>
            <h1>Subscribe</h1>
            <p>Get 10% off your first order</p>
        </div>
        <div>
            <h1>Support</h1>
            <p>111 Bijoy sarani, Dhaka</p>
            <p>  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
        <div>
            <h1>Account</h1>
            <p>My account</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div>
            <h1>Quick link</h1>
            <p>Privacy policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div>
            <h1>Social</h1>
            <img width="168px" src="/168.png" alt="" />

        </div>
      </div>
      <img width="337px" style={{display:"flex", justifySelf:"center", paddingTop:"40px"}} src="/337.png" alt="" />
    </div>
  )
}
export default Footer