import { Button, Checkbox, Input, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../Reducers/checkoutSlice";
const Checkout = () => {
  const dispatch = useDispatch();
  const { products: cart, total, skidka } = useSelector((state) => state.checkout);
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <>
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            boxShadow: "0 0 5px 0",
            width: "500px",
            borderRadius: "8px",
            height: "540px",
            padding: "12px",
          }}
        >
          <h1 className="lar pl-4">Billing details</h1>
          <form className="Log">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="Street adress" />
            <input
              type="text"
              placeholder="Apartment, floor, etc. (optional)"
            />
            <input type="text" placeholder="Town/City" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Email adress" />
            <h1>
              <Checkbox style={{ color: "red" }} />
              Save this information for faster check-out next time
            </h1>
          </form>
        </div>
        <div>
          {cart?.map((e) => (
            <div
              key={e.product.id}
              style={{
                display: "flex",
                alignItems: "center",
                width: "560px",
                height: "54px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  width="54px"
                  style={{ objectFit: "cover" }}
                  src={`http://37.27.29.18:8002/images/${e.product.image}`}
                  alt={e.product.productName}
                />
                <h1>
                  {e.product.productName} <span>x{e.quantity}</span>
                </h1>
              </div>
              <h1>${e.product.price}</h1>
            </div>
          ))}
          <div className="flex justify-between">
            <h1 style={{ fontSize: "28px", color: "#000000" }}>SubTotal: </h1>
            <h1
              style={{ fontSize: "28px", color: "#000000" }}
              className="line-through"
            >
              $ {total}
            </h1>
          </div>
          <div className="flex justify-between">
            <h1 style={{ fontSize: "26px", color: "#000000" }}>Shipping: </h1>
            <h1 style={{ fontSize: "26px", color: "#000000" }}>free</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <h1 className="lar">Total: </h1>
            <h1 className="lar">$ {skidka}</h1>
          </div>
          <Space style={{ marginTop: "16px" }}>
            <Input placeholder="Coupon code" />
            <Button danger>Apply</Button>
          </Space>
        </div>
      </div>
    </>
  );
};
export default Checkout;
