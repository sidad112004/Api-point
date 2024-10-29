"use client"
import React, { useState } from 'react';
import { SearchIcon, PlusCircleIcon, ExternalLinkIcon, XIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [apiResults, setApiResults] = useState([
    { name: 'Example API', description: 'A sample API for testing.', postedBy: 'User1', link: 'https://example.com' },
    { name: 'Test API', description: 'Another test API example.', postedBy: 'User2', link: 'https://test.com' },
  ]);
  const [selectedApi, setSelectedApi] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = () => {
    // Implement search functionality here
  };

  const openModal = (api) => {
    setSelectedApi(api);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedApi(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gray-900">
      

      {/* Search Bar and Add-Api Button */}
      <div className="flex flex-row gap-4 items-center mb-8">
        <div className="w-full max-w-xl flex items-center rounded-full shadow-lg p-3 bg-gray-800">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search API name..."
            className="flex-grow p-3 text-white bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400"
          />
          <button
            onClick={handleSearch}
            className="ml-4 flex items-center px-5 py-2 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <SearchIcon className="h-5 w-5 mr-2" />
            Search
          </button>
        </div>
        <Link
          href="dashboard/addapi"
          className="flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <PlusCircleIcon className="h-7 w-7 " />
          
        </Link>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {apiResults.length > 0 ? (
          apiResults.map((api, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-xl bg-gray-800 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(api)}
            >
              <h2 className="text-xl font-semibold text-white mb-2">{api.name}</h2>
              <p className="text-sm text-gray-400 mb-4">Posted by: <span className="font-medium">{api.postedBy}</span></p>
              <a
                href={api.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-400 hover:text-indigo-600 font-semibold"
                onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking the link
              >
                <ExternalLinkIcon className="h-5 w-5 mr-1" />
                Visit API Website
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center w-full">No results found.</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedApi && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-white">{selectedApi.name}</h2>
              <button onClick={closeModal} className="text-white hover:text-red-500 transition">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-4">{selectedApi.description}</p>
            <p className="text-gray-400 mb-4">Posted by: <span className="font-medium">{selectedApi.postedBy}</span></p>
            <a
              href={selectedApi.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-400 hover:text-indigo-600 font-semibold"
            >
              <ExternalLinkIcon className="h-5 w-5 mr-1" />
              Visit API Website
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;