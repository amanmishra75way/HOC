import React, { useState } from "react";

const FormHandler = ({ render }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));

    if (value === "") {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("Form Data:", formDataObj);
    
  };

  return render({ data, errors, handlechange, handlesubmit });
};

export default FormHandler;
