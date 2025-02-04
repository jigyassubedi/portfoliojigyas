"use client";
import React, { useEffect } from "react";

const FormSelect = ({ value, onChange }) => {
  useEffect(() => {
    import("../../../libs/nice-select2").then(({ default: NiceSelect }) => {
      const selectElement = document.getElementById("conService");
      if (selectElement) {
        new NiceSelect(selectElement);
      }
    });
  }, []);

  return (
    <select
      name="conService"
      id="conService"
      className="tj-nice-select"
      value={value} // Ensure correct value binding
      onChange={(e) => onChange(e.target.value)} // Handle change properly
    >
      <option value="" disabled>
        Choose Service
      </option>
      <option value="Branding Design">Branding Design</option>
      <option value="Web Design">Web Design</option>
      <option value="UI/UX Design">UI/UX Design</option>
      <option value="App Design">App Design</option>
    </select>
  );
};

export default FormSelect;
