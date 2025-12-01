import { Button, message, Space } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const AboutID = () => {
    const [data, setData] = useState({})
    const [messageApi, contextHolder] = message.useMessage()
    const {id} = useParams()
    const navigate = useNavigate()
        function addToWish(id) {
            if (!id && id !== 0) return
            const raw = localStorage.getItem("id")
            let arr = []
            if (raw) {
                try {
                    const parsed = JSON.parse(raw)
                    arr = Array.isArray(parsed) ? parsed : [parsed]
                } catch {
                    arr = [raw]
                }
            }
            arr.push(id)
            localStorage.setItem("id", JSON.stringify(arr))
            messageApi.success("Added to wishlist")
        }
        async function addToCart(id) {
            try {
              await axios.post(
        `http://37.27.29.18:8002/Cart/add-product-to-cart?id=${id}`,
        {},
        {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
        
    )    
    messageApi.success("Added to cart")
            } catch (error) {
    messageApi.error("Product is already in cart!")
                console.error(error);
            }
        }
    async function getData(id) {
        try {
            let {data} = await axios(`http://37.27.29.18:8002/Product/get-product-by-id?id=${id}`)
            setData(data)            
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getData(id)
    }, []);
  return (
    <div>
        {contextHolder}
      <div key={data?.data?.id} style={{justifySelf:"center"}} className="product-card ">
      <div className="product-image">
        <img
          src={`http://37.27.29.18:8002/images/${data?.data?.images[0]?.images}`}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{data?.data?.productName}</h3>
        <div className="price-row">
            <>
              <span className="discount-price">{data?.data?.discountPrice}%</span>
              <Space style={{paddingRight:"45px"}}>
              <span className="original-price1">${data?.data?.discountPrice}</span>
              <span className="original-price">${data?.data?.price}</span>
              </Space>
            </>
        </div>
        <Space className="card-actions" orientation="vertical" size={10}>
          <Button
            type="primary"
            block
            onClick={() => addToCart(data?.data?.id)}
          >
            + Add to cart
          </Button>
          <Button
            type="dashed"
            block
            onClick={() => addToWish(data?.data?.id)}
          >
            + Add to wish
          </Button>
        </Space>
      </div>
    </div>
    <p> </p>
    <Button style={{ display:"flex", justifySelf:"center" }}  type='primary' onClick={() => navigate(-1)}>Go back</Button>
    </div>
  )
}
export default AboutID