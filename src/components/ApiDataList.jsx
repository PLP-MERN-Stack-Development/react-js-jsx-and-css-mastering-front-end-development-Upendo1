import React, { useEffect, useState } from "react";

/**
 * Task 4: API Integration using Fetch
 * Features:
 * - Fetch data from a public API (JSONPlaceholder)
 * - Display in grid layout
 * - Implement loading and error states
 * - Add pagination
 * - Add search feature
 */

const ApiDataList = () => {
  const [data, setData] = useState([]);         // All fetched data
  const [filteredData, setFilteredData] = useState([]); // Filtered results
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [searchTerm, setSearchTerm] = useState("");  // Search text

  const itemsPerPage = 10;

  // Fetch data from API
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
      })
      .catch((err) => {
        setError("Failed to fetch data. Please try again later.");
        console.error("Fetch error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Search feature
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.body.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // reset to first page when searching
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirst, indexOfLast);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Render UI
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Public API Data</h2>

      {/* Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 w-full max-w-md border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      {/* Loading and Error States */}
      {loading && (
        <p className="text-center text-blue-500 font-medium">Loading data...</p>
      )}
      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}

      {/* Data Grid */}
      {!loading && !error && (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition dark:border-gray-700 dark:bg-gray-700"
              >
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50 hover:bg-gray-400"
            >
              Previous
            </button>

            <span className="text-gray-600 dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50 hover:bg-gray-400"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ApiDataList;
