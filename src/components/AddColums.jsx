import React from "react";
import { DropZone } from "@puckeditor/core";

export const TwoColumns = ({
  gap,
  padding,
  backgroundColor,
  borderRadius,
  minHeight,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // equal width
        gap,
        padding,
        backgroundColor,
        borderRadius,
        minHeight,
      }}
    >
      <DropZone zone="left-column" />
      <DropZone zone="right-column" />
    </div>
  );
};
export const threeColumnsConfig = {
  label: "Two Column Layout",

  fields: {
    gap: {
      type: "text",
      label: "Column Gap",
      defaultValue: "1rem",
    },

    padding: {
      type: "text",
      label: "Section Padding",
      defaultValue: "1rem",
    },

    backgroundColor: {
      type: "text",
      label: "Background Color",
      defaultValue: "transparent",
    },

    borderRadius: {
      type: "text",
      label: "Corner Radius",
      defaultValue: "0px",
    },

    minHeight: {
      type: "text",
      label: "Minimum Height",
      defaultValue: "auto",
    },
  },

  defaultProps: {
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "transparent",
    borderRadius: "0px",
    minHeight: "auto",
  },

  render: TwoColumns,
};
