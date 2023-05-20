
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import "./Product.css"
import { Link } from "react-router-dom";
export default function Products () {
    const { products } = useContext(AppContext);
    console.log(products);
    return (
        <div className="products">
            <div><Link>Product</Link></div>
          {products &&
            products.map((item, index) => {
              return (
                <div key={index} className="container">
                  <div className="nameproduct">
                    <img className="card_img" src="https://slyclothing.vn/images/White-Slyteam-Jacket-Front-1000x1250.jpg" />
                    <h2>{item.nameproduct} </h2>
                    <p>Price: 100$</p>
                    <a href="#" class="button">Buy now</a>
                  </div>
                </div>
              );
            })}
        </div>
      );
    
}