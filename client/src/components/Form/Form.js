import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function InputPassword(props) { 
  return (
    <div className="form-group">
      <input className="form-control" type="password" {...props} />
    </div>
  )
}

export function InputEmail(props) {
  return (
    <div className="form-group">
    <input className="form-control" type="email" {...props} />
  </div>
  )
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea placeholder="Share info, builds, raid times, memes etc." className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, lineHeight: 1 }}>
      {props.children}
    </button>
  );
}
