import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    }

    getHomeData();

    }, []);


  /*fetch('http://localhost:3000/api/products')
    .then((response) => {
      response.json().then((data) => { //return
        console.log(data)
      })
    })*/
  return (
    <>
      <Header cart={cart} />
      <title>Ecommerce Project</title>
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
