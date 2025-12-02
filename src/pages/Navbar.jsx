import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Modal, Space } from "antd";
import { useState } from "react";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Modal
        width={180}
        title={<span style={{ fontSize: "34px" }}>Go To</span>}
        open={isModalOpen}
        onCancel={closeModal}
        onOk={closeModal}
        footer={null}
      >
        <Space orientation="vertical">
          <Link className="link" to="/" onClick={closeModal}>
            Register
          </Link>
          <Link className="link" to="/contact" onClick={closeModal}>
            Contact
          </Link>
          <Link className="link" to="/about" onClick={closeModal}>
            About
          </Link>
          <Link className="link" to="/wishlist" onClick={closeModal}>
            Wishlist
          </Link>
          <Link className="link" to="/home" onClick={closeModal}>
            Home
          </Link>
          <Link className="link" to="/cart" onClick={closeModal}>
            Cart
          </Link>
        </Space>
      </Modal>
      <div className="nav">
        <div>
          <img onClick={openModal} width="166px" src="/image.png" alt="Logo" />
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
          <Link to="/wishlist">
            <img width="32px" src="/image copy 2.png" alt="Wishlist" />
          </Link>
          <Link to="/cart">
            <img width="32px" src="/image copy 3.png" alt="Cart" />
          </Link>
          <img width="32px" src="/image copy 4.png" alt="" />
        </div>
      </div>
      <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Navbar;
