import React, { ReactElement } from "react";
import Header from "../components/layouts/header";
import Menu from "../components/layouts/menu";
import Layout from "../components/layouts/layout";
import MaterialTable from "material-table";
import { products } from "./api/dummy";
import { Typography } from "@material-ui/core";

interface Props {}

export default function stock({}: Props): ReactElement {
  const columns = [
    {
      title: "ID",
      field: "id",
      render: (item) => (
        <Typography variant="body1" color="secondary">
          {item.id}
        </Typography>
      ),
    },
    {
      title: "IMAGE",
      field: "image",
      // cellStyle: { padding: 5 },
      // render: (item) => (
      //   <img
      //     src={`${process.env.NEXT_PUBLIC_APP_BASE_IMAGE_URL}/${
      //       item.image
      //     }?version=${Math.random().toString()}`}
      //     style={{ width: 50, height: 50, borderRadius: "5%" }}
      //   />
      // ),
    },
    {
      title: "NAME",
      field: "name",
      cellStyle: { minWidth: 500 },
      render: (item) => <Typography variant="body1">{item.name}</Typography>,
    },
    {
      title: "PRICE",
      field: "price",
      // render: (item) => (
      //   <Typography variant="body1">
      //     <NumberFormat
      //       value={item.price}
      //       displayType={"text"}
      //       thousandSeparator={true}
      //       decimalScale={2}
      //       fixedDecimalScale={true}
      //       prefix={"฿"}
      //     />
      //   </Typography>
      // ),
    },
    {
      title: "STOCK",
      field: "stock",
      // render: (item) => (
      //   <Typography variant="body1">
      //     <NumberFormat
      //       value={item.stock}
      //       displayType={"text"}
      //       thousandSeparator={true}
      //       decimalScale={0}
      //       fixedDecimalScale={true}
      //       suffix={" pcs"}
      //     />
      //   </Typography>
      // ),
    },
    {
      title: "CREATED",
      field: "updatedAt",
      // render: (item) => (
      //   <Typography>
      //     <Moment format="DD/MM/YYYY">{item.updatedAt}</Moment>
      //   </Typography>
      // ),
    },
  ];

  return (
    <Layout>
      <MaterialTable columns={columns} data={products} title="Course" />
    </Layout>
  );
}
