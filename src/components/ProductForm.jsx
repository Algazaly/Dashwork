import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    image: null,
    amount: "",
  });

  const categoryOptions = [
    "Electronics",
    "Fashion",
    "Food",
    "Beauty & Health",
    "Sports & Fitness",
    "Books & Stationery",
    "Toys & Games",
    "Home & Living",
  ];

  // Handle text inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Product saved successfully!");
  };

  return (
    <div className="p-6 shadow rounded-lg">
    <div className="w-1/2 mx-auto">
      <h2 className="text-xl text-center font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        
        {/* Name */}
        
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Product Type */}
        <input
          type="number"
          name="product"
          placeholder="Product Quantity"
          value={formData.product}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Image Upload */}
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
        />

        {/* Amount */}
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
       <select
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            {categoryOptions.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

        {/* Submit */}
        <div className="flex justify-center">
        <button
          type="submit"
          className="items-center bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Product
        </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ProductForm;
                   