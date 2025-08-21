import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import CategoryForm from "./CategoryForm";

const Category = () => {
  const categories = [
    { id: 1, image: assets.AirFryer, customerName: "Alice Johnson", categoryName: "Electronics", createdAt: "2025-08-10", status: "Completed" },
    { id: 2, image: assets.Fashion, customerName: "Michael Lee", categoryName: "Fashion", createdAt: "2025-08-12", status: "Pending" },
    { id: 3, image: assets.Food, customerName: "Sophia Martinez", categoryName: "Food", createdAt: "2025-08-13", status: "Processing" },
    { id: 4, image: assets.Beauty, customerName: "Daniel Kim", categoryName: "Beauty & Health", createdAt: "2025-08-15", status: "Cancelled" },
    { id: 5, image: assets.Sport, customerName: "Emma Wilson", categoryName: "Sports & Fitness", createdAt: "2025-08-16", status: "Completed" },
    { id: 6, image: assets.Book, customerName: "Olivia Brown", categoryName: "Book & Stationery", createdAt: "2025-08-17", status: "Pending" },
    { id: 7, image: assets.Toy, customerName: "James Smith", categoryName: "Toys & Games", createdAt: "2025-08-18", status: "Processing" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = categories.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(categories.length / rowsPerPage);

  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  // state for popup form
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddCategory = (newCategory) => {
    console.log("Added Category:", newCategory);
    setShowForm(false); // close modal after saving
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Category Details</h2>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center border rounded-xl p-1">
          <img src={assets.Magnifier} alt="" className="bg-white" />
          <input type="text" placeholder="search by customer's name" />
        </div>
        <div className="flex items-center gap-3">
          {/* open popup on click */}
          <button onClick={() => setShowForm(true)} className="border rounded-xl p-1">
            Add Category
          </button>
          <div className="flex items-center border rounded-xl p-1">
            <img src={assets.Filter} alt="" className="w-4" />
            <h2>Filter</h2>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b text-left">Id</th>
              <th className="py-3 px-4 border-b text-left">Image</th>
              <th className="py-3 px-4 border-b text-left">Customer Name</th>
              <th className="py-3 px-4 border-b text-left">Category Name</th>
              <th className="py-3 px-4 border-b text-left">Created At</th>
              <th className="py-3 px-4 border-b text-left">Status</th>
              <th className="py-3 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="h-80">
            {currentRows.map((category, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border-b">{category.id}</td>
                <td className="py-3 px-4 border-b"><img src={category.image} alt="" /></td>
                <td className="py-3 px-4 border-b">{category.customerName}</td>
                <td className="py-3 px-4 border-b">{category.categoryName}</td>
                <td className="py-3 px-4 border-b">{category.createdAt}</td>
                <td
                  className={`py-3 px-4 border-b font-semibold ${
                    category.status === "Completed"
                      ? "text-green-600"
                      : category.status === "Pending"
                      ? "text-yellow-600"
                      : category.status === "Processing"
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {category.status}
                </td>
                <td className="px-4 py-2 text-right relative border-b" ref={menuRef}>
                  <button
                    onClick={() => toggleMenu(category.id)}
                    className="px-2 py-1 text-xl font-bold hover:bg-gray-200 rounded"
                  >
                    ⋮
                  </button>

                  {openMenuId === category.id && (
                    <div className="absolute right-4 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10">
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Delete</button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                        {category.active ? "Deactivate" : "Activate"}
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <div className="flex justify-center flex-1 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Add New Category</h2>
            <CategoryForm onSave={handleAddCategory} onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
