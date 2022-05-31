import { Col, Image, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../types/product";

type ProductContentProps = {
  products: ProductType[];
};

const ProductContent = (props: ProductContentProps) => {
  return (
    <Content style={{ marginLeft: "40px", marginTop: "25px" }}>
      <div>
        <Row gutter={[24, 24]}>
          {props.products &&
            props.products.map((item, index) => {
              return (
                <Col key={index} span={6}>
                  <div
                    style={{
                      textAlign: "center",
                      width: "300px",
                      height: "350px",
                    }}
                  >
                    <img
                      src={`https://picsum.photos/240/300`}
                      width={240}
                    />

                    <div style={{ textAlign: "center" }}>
                      <Link to={`/product-detail/${item._id}`}>
                        <span>{item.name}</span> <br />
                      </Link>
                      <Link to={`/product-detail/${item._id}`}>
                        <span>{item.price}</span>
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    </Content>
  );
};

export default ProductContent;
