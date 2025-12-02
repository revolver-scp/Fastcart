import { Button, message, Space } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../src/index.css";
const Wishlist = () => {
  const [data, setData] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const getData = async () => {
    const id = localStorage.getItem("id");
    let wishlist = [];
    try {
      wishlist = JSON.parse(id);
      if (!Array.isArray(wishlist)) wishlist = [wishlist];
    } catch (error) {
      wishlist = [id];
    }
    const token = localStorage.getItem("token");
    try {
      const res = wishlist.map((id) =>
        axios.get(
          `http://37.27.29.18:8002/Product/get-product-by-id?id=${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
      );
      const responses = await Promise.all(res);
      const products = responses.map((e) => e.data?.data).filter(Boolean);
      setData(products);
    } catch (error) {
      setData([]);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const removeFromWishlist = (delet) => {
    const id = localStorage.getItem("id");
    let wishlist = [];
    try {
      wishlist = JSON.parse(id);
      if (!Array.isArray(wishlist)) wishlist = [wishlist];
    } catch (error) {
      wishlist = [id];
    }
    const index = wishlist.findIndex((id) => id == delet);
    if (index != -1) {
      wishlist.splice(index, 1);
      if (wishlist.length) localStorage.setItem("id", JSON.stringify(wishlist));
      else localStorage.removeItem("id");
    }
    setData((prev) => prev.filter((product) => product.id != delet));
    messageApi.success("Deleted successfully");
  };
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
  return (
    <div
    className="flx"
      style={{ display: "flex", justifySelf: "center", gap: 12, padding: 12 }}
    >
      {contextHolder}
      {data.map((e) => (
        <div key={e.id} className="product-card ">
          <div className="product-image">
            <img
              src={`http://37.27.29.18:8002/images/${e?.images?.at(0).images}`}
            />
          </div>
          <div className="product-info">
            <h3 className="product-name">{e.productName}</h3>
            <div className="price-row">
              <>
                <span className="discount-price">{e.discountPrice}%</span>
                <Space style={{ paddingRight: "45px" }}>
                  <span className="original-price1">${e.discountPrice}</span>
                  <span className="original-price">${e.price}</span>
                </Space>
              </>
            </div>
            <Space orientation="vertical">
              <Button type="primary" block onClick={() => addToCart(e.id)}>
                + Add to cart
              </Button>
              <Button danger block onClick={() => removeFromWishlist(e.id)}>
                Delete
              </Button>
            </Space>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Wishlist;
