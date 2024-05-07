"use client";

// components/DefaultLayout.js
import React from "react";
import Header from "../Header"; // Update the import path to "../Header"
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../../app/globals.css";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default withAuthenticator(DefaultLayout);
