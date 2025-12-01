import { Button, message, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const AboutID = () => {
  const [data, setData] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const { id } = useParams();
  const navigate = useNavigate();
  function addToWish(id) {
    const idx = localStorage.getItem("id");
    let wishlist = [];
    if (idx) {
      try {
        const idWish = JSON.parse(idx);
        wishlist = Array.isArray(idWish) ? idWish : [idWish];
      } catch {
        wishlist = [idx];
      }
    }
    wishlist.push(id);
    localStorage.setItem("id", JSON.stringify(wishlist));
    messageApi.success("Added to wishlist");
  }
  async function addToCart(id) {
    try {
      await axios.post(
        `http://37.27.29.18:8002/Cart/add-product-to-cart?id=${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      messageApi.success("Added to cart");
    } catch (error) {
      messageApi.error("Product is already in cart!");
      console.error(error);
    }
  }
  async function getData(id) {
    try {
      let { data } = await axios(
        `http://37.27.29.18:8002/Product/get-product-by-id?id=${id}`
      );
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData(id);
  }, []);
  return (
    <div className="mx">
      {contextHolder}
      <div className="images">
        <Space orientation="vertical">
          <img
            width="170px"
            height={"138px"}
            src={`http://37.27.29.18:8002/images/${data?.data?.images[0]?.images}`}
          />
          <img
            width="170px"
            height={"138px"}
            src={`http://37.27.29.18:8002/images/${data?.data?.images[0]?.images}`}
          />
          <img
            width="170px"
            height={"138px"}
            src={`http://37.27.29.18:8002/images/${data?.data?.images[0]?.images}`}
          />
          <img
            width="170px"
            height={"138px"}
            src={`http://37.27.29.18:8002/images/${data?.data?.images[0]?.images}`}
          />
        </Space>
        <img
          width={"500px"}
          style={{ objectFit: "cover" }}
          height={"600px"}
          src={`http://37.27.29.18:8002/images/${data?.data?.images[0]?.images}`}
        />
        <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
        <h1 style={{fontSize:"36px", font:"Inter"}}>{data?.data?.productName}</h1>
        <img width="291px" src="../../Frame 922.png" />
        <h1 style={{fontSize:"34px", font:"Inter" }}>${data?.data?.price}</h1>
        <p style={{color:"gray", fontSize:"24px", borderBottom:"1px solid black"}}>{data?.data?.description}</p>
        <h1 style={{fontSize:"30px", font:"Inter", display:"flex", alignItems:"center", gap:"5px", padding:"5px" }}>Colors: <span style={{color: data?.data?.color, background: data?.data?.color, padding:"15px 15px", borderRadius:"50%"}}></span></h1>
        <img width="320px" src="../../Frame 917.png"/>
        <div style={{display:'flex', gap:"18px"}}>
          <div style={{display:"flex"}}>
            <img src="../../Frame 906.png" width="40px"/>
            <div style={{ width:"80px", height:'44px', border:"1px solid #000000", display:'flex', justifyContent:"center", alignItems:"center"}}>
              {data?.data?.productInfoFromCart.quantity}
            </div>
            <img src="../../Frame 907.png" width="41px"/>
          </div>
          <img onClick={() => window.location = '/checkout'} src="../../Button.png" />
        </div>
        <img width="399px" src="../../Frame 911.png"/>
        </div>
      </div>
      <Button
        style={{ display: "flex", justifySelf: "center" }}
        type="primary"
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
    </div>
  );
};
export default AboutID;
