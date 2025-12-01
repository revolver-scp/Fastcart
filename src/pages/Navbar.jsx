import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Button, message, Modal, Space } from 'antd';
import {  useState } from 'react';
import axios from 'axios';
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([]) 
  const [total, setTotal] = useState(0)
  const [messageApi, contextHolder] = message.useMessage()
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  async function getCart() {
     setModal(true)
    try {
      let { data } = await axios("http://37.27.29.18:8002/Cart/get-products-from-cart", { headers:{Authorization:`Bearer ${localStorage.getItem("token")}`} })
      setCart(data.data[0].productsInCart)
      setTotal(data.data[0].totalPrice)
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteCart(id) {
    console.log(id)
    try {
      await axios.delete(`http://37.27.29.18:8002/Cart/delete-product-from-cart?id=${id}`, { headers:{Authorization:`Bearer ${localStorage.getItem("token")}`} })
      getCart()
      messageApi.success("Deleted succesefully")
    } catch (error) {
      messageApi.error("Delete failed")
      console.error(error);
    }
  }
  async function deleteAll() {
    try {
      await axios.delete(`http://37.27.29.18:8002/Cart/clear-cart`, { headers:{Authorization:`Bearer ${localStorage.getItem("token")}`} })
      getCart()
      messageApi.success("Deleted succesefully")
    } catch (error) {
      messageApi.error("Delete failed")
      console.error(error);
    }
  }
  return (
    <>
    {contextHolder}
      <Modal
        width={180}
        title={<span className='lar' style={{fontSize:"34px"}}>Go To</span>}
        open={isModalOpen}
        onCancel={closeModal}
        onOk={closeModal}
        footer={null} 
      >
        <Space orientation="vertical">
          <Link className='link' to="/" onClick={closeModal}>Register</Link>
          <Link className='link' to="/contact" onClick={closeModal}>Contact</Link>
          <Link className='link' to="/about" onClick={closeModal}>About</Link>
            <Link className='link' to="/wishlist" onClick={closeModal}>Wishlist</Link>
          <Link className='link' to="/home" onClick={closeModal}>Home</Link>
        </Space>
      </Modal>
      <Modal
        className='carta'
        title={<div style={{display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:"10px"}}><span className='lar' style={{fontSize:"34px"}}>My cart</span> <Button danger onClick={deleteAll}>Delete All</Button></div>}
        open={modal}
        onCancel={() => setModal(false)}
        onOk={() => setModal(false)}
        footer={null} 
      >
        {cart.map((e) => {
          return(
            <>
          <div style={{display:"flex", justifyContent:"space-between", borderBottom:"1px solid gray", padding:"5px"}} key={e.product.id}>
            <h1>{e.product.productName}</h1>
            <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
            <h1>${e.product.price}</h1>
            <Button onClick={() => deleteCart(e.id)} danger>X</Button>
            </div>
          </div>
          
</>
        )})}
        <h1 className='text-right'>Total: ${total}</h1>
      </Modal>
      <div className="nav">
        <div>
          <img onClick={openModal} width="166px" src="/image.png" />
          <img className='ca' onClick={getCart} width="32px" src="/image copy 3.png" alt="" />
        </div>
        <div>
          <Space>
            <Link to="/">Register</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
          </Space>
        </div>
        <div>
          <img width="243px" src="/image copy.png" alt="" />
          <img onClick={() => window.location = "/wishlist"} width="32px" src="/image copy 2.png" alt="" />
          <img onClick={getCart} width="32px" src="/image copy 3.png" alt="" />
          <img width="32px" src="/image copy 4.png" alt="" />
        </div>
      </div>
      <div style={{paddingTop:"30px", paddingBottom:"30px"}}>
      <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Navbar;