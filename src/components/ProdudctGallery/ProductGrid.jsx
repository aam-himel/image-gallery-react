import React from "react";

export function ProductGrid({ children, columns }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 10,
        padding: 10,
        background: "#fff",
      }}
    >
      {children}
    </div>
  );
}
