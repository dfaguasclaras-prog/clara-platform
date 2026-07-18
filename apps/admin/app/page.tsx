import React from "react";

export default function Home() {
    return React.createElement(
          "main",
      { className: "flex min-h-screen flex-col items-center justify-center p-24" },
          React.createElement("h1", { className: "text-4xl font-bold" }, "Clara Platform"),
          React.createElement("p", { className: "mt-4 text-lg text-gray-600" }, "Painel administrativo")
        );
}
