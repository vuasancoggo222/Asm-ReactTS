import { Button } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { read } from "../../api/product";
import { ProductType } from "../../types/product";

type Props = {};

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    const getDetailProduct = async (id: any) => {
      const { data } = await read(id);
      setProducts(data);
    };
    getDetailProduct(id);
  }, []);
  console.log(products);

  return (
    <Content>
      <div>
        <img
          src={`http://localhost:8001/uploads/${products.image}`}
          alt=""
          style={{
            marginLeft: "50px",
            marginTop: "25px",
            width: "350px",
            height: "450px",
          }}
        />

        <div>
          <h2>{products.name}</h2>
          <span>{products.price}</span>
          <div>{products.description}</div>
        </div>
        <div>
          <input type="number" value="1" min="1" />
          <Button type="primary">ADD</Button>
        </div>
      </div>
    </Content>
  );
};

export default ProductDetail;
