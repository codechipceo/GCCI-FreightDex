import React, { useState } from "react";

const ActionDialog = ({ onView, onEdit, onDelete, disableEdit, disableView }) => {
  

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
      }}
    >
   
        <div
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            padding: "16px",
            minWidth: "300px",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <button
            onClick={onView}
            disabled={disableView}
            style={{
              ...buttonStyle,
              backgroundColor: disableView ? "#f0f0f0" : "#e0f7ff",
              color: disableView ? "#999" : "#000",
              cursor: disableView ? "not-allowed" : "pointer",
            }}
          >
             View
          </button>
          <button
            onClick={onEdit}
            disabled={disableEdit}
            style={{
              ...buttonStyle,
              backgroundColor: disableEdit ? "#f0f0f0" : "#e0ffe0",
              color: disableEdit ? "#999" : "#000",
              cursor: disableEdit ? "not-allowed" : "pointer",
            }}
          >
             Edit
          </button>
          <button
            onClick={onDelete}
            style={{
              ...buttonStyle,
              backgroundColor: "#ffe0e0",
              color: "red",
            }}
          >
             Delete
          </button>
        </div>
      
    </div>
  );
};

const buttonStyle = {
  flex: 1,
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default ActionDialog;
