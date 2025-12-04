import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get, getBrand, getCategory, getsubCategory } from "../Reducers/getFilter";
import { Button, Space } from "antd";
import { API } from "../ultis/axiosReques";
import { Link } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState({})
  const { category,brandMap, subCategor, brand, products, subcat, categ } = useSelector(
    (state) => state.get
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get());
  }, []);
  useEffect(() => {
    setData(products)
  }, [products])
  const categBu = (id) => {
      dispatch(getsubCategory(id))
  }
  const categeryGET = (id) => {
    dispatch(getCategory(id))
  } 
  const brandGET = (id) => {
    dispatch(getBrand(id))
  } 
  useEffect(() => {
    setData(subcat)
  }, [subcat])
  useEffect(() => {
    setData(categ)
  }, [categ])
  useEffect(() => {
    setData(brandMap)
  }, [brandMap])
  return (
    <>
      <div
      className="bh"
        style={{
          display: "flex",
          gap:"25px",
          maxWidth: "1300px",
          margin: "auto",
          justifyContent:"space-between",
          justifySelf:"center",
          alignItems:"start"
        }}
      >
        <div className="filters">
          <Space orientation="vertical">

            <h1 className="lar">Brands</h1>
            {brand?.map((e) => (
                <h1 onClick={() => brandGET(e.id)}>{e.brandName}</h1>
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
                <h1 onClick={() => categeryGET(e.id)}>{e.categoryName}</h1>
                <img
                  width="40px"
                  style={{ objectFit: "cover" }}
                  src={`${API}/images/${e.categoryImage}`}
                />
              </div>
            ))}
            <hr />
            <h1 className="lar">SubCategory</h1>
            {subCategor?.map((e) => (
              <h1 onClick={() => categBu(e.id)}>{e.subCategoryName}</h1>
            ))}
          </Space>
        </div>
        <div className="products-grid w-[1000px]">
          { Array.isArray(data) ? (
          data?.map((e) => {
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
          })) : (
            data?.products?.map((e) => {
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
          })
          )}
        </div>
      </div>
    </>
  );
};
export default Products;
