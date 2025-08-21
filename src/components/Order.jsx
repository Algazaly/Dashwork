import React, { useState, useEffect, useRef, } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Order = () => {
  const orders = [
    {
      id:1,
      orderNumber: "#ORD-1001",
      customerName: "Alice Johnson",
      productQuantity: 3,
      amount: "$120.00",
      createdAt: "2025-08-10",
      status: "Completed",
    },
    {
      id:2,
      orderNumber: "#ORD-1002",
      customerName: "Michael Lee",
      productQuantity: 5,
      amount: "$250.00",
      createdAt: "2025-08-12",
      status: "Pending",
    },
    { 
      id:3,
      orderNumber: "#ORD-1003",
      customerName: "Sophia Martinez",
      productQuantity: 2,
      amount: "$80.00",
      createdAt: "2025-08-13",
      status: "Processing",
    },
    { 
      id:4,
      orderNumber: "#ORD-1004",
      customerName: "Daniel Kim",
      productQuantity: 1,
      amount: "$45.00",
      createdAt: "2025-08-15",
      status: "Cancelled",
    },
    { 
      id:5,
      orderNumber: "#ORD-1005",
      customerName: "Emma Wilson",
      productQuantity: 4,
      amount: "$160.00",
      createdAt: "2025-08-16",
      status: "Completed",
    },
    { 
      id:6,
      orderNumber: "#ORD-1006",
      customerName: "Olivia Brown",
      productQuantity: 6,
      amount: "$300.00",
      createdAt: "2025-08-17",
      status: "Pending",
    },
    { 
      id:7,
      orderNumber: "#ORD-1007",
      customerName: "James Smith",
      productQuantity: 2,
      amount: "$90.00",
      createdAt: "2025-08-18",
      status: "Processing",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = orders.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(orders.length / rowsPerPage);

  const [openMenuId, setOpenMenuId] = useState(null);
    const menuRef = useRef(null);
  
    const toggleMenu = (id) => {
      setOpenMenuId(openMenuId === id ? null : id);
    };
  
    // Close menu when clicking outside
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

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
      <div className="flex items-center justify-between mb-2 ">
                  <div className="flex items-center border rounded-xl p-1 cursor-pointer ">
                    <img src={assets.Magnifier} alt="" className="bg-white" />
                            <input type="text" placeholder="search by customer's name" />  
                  </div>
                  <div className="flex items-center gap-3 cursor-pointer">
                      <Link to="/Order/new"><button className=" border rounded-xl p-1">Add Order</button></Link>
                      <div className="flex items-center border rounded-xl p-1">
                          <img src={assets.Filter} alt="" className="w-4" />
                          <h2>Filter</h2>
                      </div>
                  </div>
          
                  </div>
                  
      

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b text-left">Order Number</th>
              <th className="py-3 px-4 border-b text-left">Customer Name</th>
              <th className="py-3 px-4 border-b text-left">Product Quantity</th>
              <th className="py-3 px-4 border-b text-left">Amount</th>
              <th className="py-3 px-4 border-b text-left">Created At</th>
              <th className="py-3 px-4 border-b text-left">Status</th>
              <th className="py-3 px-4 border-b text-left">Actions</th>
              
              
            </tr>
          </thead>
          <tbody>
            {currentRows.map((order, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border-b">{order.orderNumber}</td>
                <td className="py-3 px-4 border-b">{order.customerName}</td>
                <td className="py-3 px-4 border-b">{order.productQuantity}</td>
                <td className="py-3 px-4 border-b">{order.amount}</td>
                <td className="py-3 px-4 border-b">{order.createdAt}</td>
                <td
                  className={`py-3 px-4 border-b font-semibold ${
                    order.status === "Completed"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-yellow-600"
                      : order.status === "Processing"
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {order.status}
                </td>
                <td className="px-4 py-2 text-right relative border-b" ref={menuRef}>
              {/* 3 dots button */}
              <button
                onClick={() => toggleMenu(order.id)}
                className="px-2 py-1 text-xl font-bold hover:bg-gray-200 rounded"
              >
                ⋮
              </button>

              {/* Dropdown */}
              {openMenuId === order.id && (
                <div className="absolute right-4 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Edit
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Delete
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    {order.active ? "Deactivate" : "Activate"}
                  </button>
                </div>
              )}
            </td>   
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
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
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : ""
            }`}
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
    </div>
  );
};

export default Order;
