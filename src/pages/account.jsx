import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get, getBrand, getCategory, getsubCategory } from "../Reducers/getFilter";
import {  Button, Input, Space } from "antd";
const Account = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch();
  return (
    <>
      <div
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
        <div>
          <Space orientation="vertical">
            <h1>Manage my account</h1>
            <p className="pl-4 text-red-600">My profile</p>
            <p className="pl-4">Adress book</p>
            <p className="pl-4">My payment options</p>
            <h1>My orders</h1>
            <p className="pl-4">My returns</p>
            <p className="pl-4">My Cancellations</p>
            <h1>My wishlist</h1>
          </Space>
        </div>
        <div className="products-grid w-[1000px]">
          <h1 className="text-red-600 lar">Profile</h1>
          <Space className="flex justify-between w-full">
            <Input className="h-14" style={{padding:"5px", width:"500px"}} placeholder="First name"></Input>
            <Input className="h-14" style={{padding:"5px", width:"500px"}} placeholder="Last name"></Input>
          </Space>
          <Space className="flex justify-between w-full">
            <Input className="h-14" style={{padding:"5px", width:"500px"}} placeholder="Email adress"></Input>
            <Input className="h-14" style={{padding:"5px", width:"500px"}} placeholder="Street adress"></Input>
          </Space>
          <h1 className="lar">Password changes</h1>
          <Input className="h-14" style={{padding:"5px"}} type={"password"} placeholder="Current password"></Input>
          <Space>
            <Input className="h-14" style={{width:"473px", padding:"5px"}} placeholder="New Password"></Input>
            <Input className="h-14" style={{width:"473px", padding:"5px"}} placeholder="Confirm Password"></Input>
          </Space>
          <Space align="end">
            <Button type='link'>Cancel</Button>
            <Button type='primary'>Submit</Button>
          </Space>
        </div>
      </div>
    </>
  );
};
export default Account;
