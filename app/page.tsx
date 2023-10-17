"use client";
import { useState } from "react";
import Header from "./header/Header";
import InvoiceForm from "./invoiceForm/InvoiceForm";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <Header onShowForm={showFormHandler} />
      {showForm && <InvoiceForm onShowForm={showFormHandler}/>}
    </>
  );
}
