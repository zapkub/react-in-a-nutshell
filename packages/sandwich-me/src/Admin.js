import React from "react";
import "./animate.css";

function useOrderListAPI() {
  const [count, setCount] = React.useState(0);
  const [list, setList] = React.useState([]);

  React.useEffect(
    () => {
      setTimeout(() => {
        const f = count + 1;
        setCount(f);
      }, 3000);
    },
    [count]
  );

  React.useEffect(
    () => {
      fetch("http://localhost:3001/order/_list").then(async resp => {
        const result = await resp.json();
        setList(result.data);
        window.scrollTo(0, document.body.scrollHeight);
      });
    },
    [count]
  );

  return {
    list,
    count
  };
}

const Receipt = ({ name, menu, bread, veggies, sauces, orderNo }) => (
  <div className="invoice-POS animated flipInX">
    <center className="top">
      <h1>{"🦄"}</h1>
      <h4>{"Unicorn sandwich"}</h4>
      <label>Order No.</label> {orderNo}
    </center>

    <div className="mid">
      <div className="info">
        <div style={{ marginTop: 5 }}>
          <small>{"Customer info"}</small>
        </div>
        <small>{"Name: "}</small> <b>{name}</b>
        <div style={{ marginTop: 5 }}>
          <small>{"Order detail"}</small>
        </div>
      </div>

      <div className="tabletitle">
        <b>{menu}</b>
      </div>
      <center>{"with"}</center>
      <div className="tabletitle">
        <b>{bread}</b>
        <small>{" bread"}</small>
      </div>

      <center>{"with veggies"}</center>
      <div className="tabletitle">
        <b>{veggies.join(",")}</b>
        {veggies.length === 0 ? "no veggies" : null}
        <small>{}</small>
      </div>

      <center>{"and sauces"}</center>
      <div className="tabletitle">
        <b>{sauces.join(",")}</b>
        {sauces.length === 0 ? "no sauces" : ""}
        <small>{}</small>
      </div>
    </div>
    <div className="bot">
      <p>
        <b>
          {"Thank you !!"} {"Please enjoy your delicious sandwich!"}
        </b>
      </p>
    </div>
  </div>
);

export default function POSAdmin() {
  const { list } = useOrderListAPI();
  return (
    <div>
      {list.map(item => (
        <Receipt key={item.orderNo} {...item} />
      ))}
    </div>
  );
}
