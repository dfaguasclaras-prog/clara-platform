import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "Clara Platform — Admin",
    description: "Painel administrativo da Clara Platform"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return React.createElement(
          "html",
      { lang: "pt-BR" },
          React.createElement("body", null, children)
        );
}
