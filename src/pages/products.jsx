import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../Reducers/getFilter";
import { Button, Space } from "antd";
import { API } from "../ultis/axiosReques";
import { Link } from "react-router-dom";
const Products = () => {
  const { category, subCategory, brand, products } = useSelector(
    (state) => state.get
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get());
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        <div className="filters">
          <Space orientation="vertical">

            <h1 className="lar">Brands</h1>
            {brand?.map((e) => (
                <h1>{e.brandName}</h1>
            ))}
            <hr />
            <h1 className="lar">Category</h1>
            {category?.map((e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h1>{e.categoryName}</h1>
                <img
                  width="40px"
                  style={{ objectFit: "cover" }}
                  src={`${API}/images/${e.categoryImage}`}
                />
              </div>
            ))}
            <hr />
            <h1 className="lar">SubCategory</h1>
            {subCategory?.map((e) => (
              <h1>{e.subCategoryName}</h1>
            ))}
          </Space>
        </div>
        <div className="products-grid">
          {products?.products?.map((e) => {
            return (
              <div key={e.id} className="product-card ">
                <div className="product-image">
                  <img src={`${API}/images/${e.image}`} />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{e.productName}</h3>
                  <div className="price-row">
                    <>
                      <span className="discount-price">{e.discountPrice}%</span>
                      <Space style={{ paddingRight: "45px" }}>
                        <span className="original-price1">
                          ${e.discountPrice}
                        </span>
                        <span className="original-price">${e.price}</span>
                      </Space>
                    </>
                  </div>
                  <Space
                    className="card-actions"
                    orientation="vertical"
                    size={10}
                  >
                    <Button
                      type="primary"
                      block
                      onClick={() => addToCart(e.id)}
                    >
                      + Add to cart
                    </Button>
                    <Button type="dashed" block onClick={() => addToWish(e.id)}>
                      + Add to wish
                    </Button>
                    <Link to={`/products/${e.id}`}>Info</Link>
                  </Space>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Products;
