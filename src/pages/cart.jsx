import { Button, message, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  deleteCart,
  getCart,
  increaseProduct,
  reduceProduct,
} from "../Reducers/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../ultis/axiosReques";
const Cart = () => {
  const { products: cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  const Delete = (id) => {
    dispatch(deleteCart(id));
    messageApi.success("Delete succesefully");
    setTimeout(() => dispatch(getCart()), 300);
  };
  const DeleteAll = () => {
    dispatch(deleteAll());
    messageApi.success("Cart Deleted");
    setTimeout(() => dispatch(getCart()), 300);
  };
  const Increase = (id) => {
    dispatch(increaseProduct(id));
    messageApi.success("Succesefully increased");
    setTimeout(() => dispatch(getCart()), 300);
  };

  const Decrease = (id) => {
    dispatch(reduceProduct(id));
    messageApi.success("Succesefully decreased");
    setTimeout(() => dispatch(getCart()), 300);
  };
  return (
    <>
      {contextHolder}

      <div
        style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}
      >
        <>
          <div style={{ marginBottom: "20px", textAlign: "right" }}>
            <Button danger onClick={DeleteAll}>
              Clear Cart
            </Button>
          </div>

          <Space orientation="vertical" style={{ width: "100%" }} size="middle">
            {cart.map((e) => (
              <div
                key={e.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#fafafa",
                }}
              >
                <Space>
                  <img
                    style={{ width: "50px", objectFit:"cover" }}
                    src={`${API}/images/${e.product.image}`}
                    alt=""
                  />
                  <div>
                    <h3>{e.product.productName}</h3>
                    <p>
                      ${e.product.price} x {e.quantity}
                    </p>
                  </div>
                </Space>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Button size="small" onClick={() => Decrease(e.id)}>
                    −
                  </Button>
                  <span style={{ minWidth: "30px", textAlign: "center" }}>
                    {e.quantity}
                  </span>
                  <Button size="small" onClick={() => Increase(e.id)}>
                    +
                  </Button>

                  <Button danger size="small" onClick={() => Delete(e.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </Space>
          <div style={{ marginTop: "40px", textAlign: "right" }}>
            <h2>Total: ${total}</h2>
            <Button type="primary" size="large" style={{ marginTop: "20px" }}>
              <Link to={"/checkout"}>Procces to Checkout</Link>
            </Button>
          </div>
        </>
      </div>
    </>
  );
};
export default Cart;
