import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer";
import Loading from "../Components/Loading/Loading";

const Routes = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <>
      <div>
        <Header></Header>
      </div>
      {navigation.state === "loading" ? (
        <Loading></Loading>
      ) : (
        <Outlet></Outlet>
      )}

      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Routes;
