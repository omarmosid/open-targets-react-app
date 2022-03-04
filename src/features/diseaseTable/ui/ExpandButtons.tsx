import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

type ExpandButtonsProps = {
  row: any;
};

const ExpandButtons: React.FC<ExpandButtonsProps> = ({ row }) => {
  if (row.isExpanded) {
    return (
      <span {...row.getToggleRowExpandedProps()}>
        <IconButton aria-label="Compress" size="small">
          <RemoveCircleOutline />
        </IconButton>
      </span>
    );
  } else {
    return (
      <span {...row.getToggleRowExpandedProps()}>
        <IconButton aria-label="Compress" size="small">
          <AddCircleOutline />
        </IconButton>
      </span>
    );
  }
};

export { ExpandButtons };
