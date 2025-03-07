import { FilterSortControlsProps } from '@/types';
import React from 'react';

const FilterSortControls = ({
  filterStatus,
  setFilterStatus,
  sortBy,
  setSortBy,
}: FilterSortControlsProps) => (
  <div className="mb-4 flex justify-center items-center mx-auto w-full bg-gray-100 shadow-xl">
    
    {/* Filter Dropdown */}
    <div className="m-2 text-gray-500 shadow-sm">
      <select
        className="p-2 border rounded"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)} // Update filter status on change
      >
        <option value="All">All</option> {/* Show all orders */}
        <option value="Pending">Pending</option> {/* Show only pending orders */}
        <option value="Completed">Completed</option> {/* Show only completed orders */}
      </select>
    </div>

    {/* Sort Dropdown */}
    <div className="m-2 text-gray-500 shadow-sm">
      <select
        className="p-2 border rounded"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)} // Update sort criteria on change
      >
        <option value="timestamp">Sort by Date</option> {/* Sort by order timestamp */}
        <option value="totalPrice">Sort by Price</option> {/* Sort by total price */}
      </select>
    </div>
  </div>
);

// Export the component with React.memo for performance optimization
export default React.memo(FilterSortControls);