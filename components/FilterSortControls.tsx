
import { FilterSortControlsProps } from '@/types';
import React from 'react';

const FilterSortControls = ({ filterStatus, setFilterStatus, sortBy, setSortBy }: FilterSortControlsProps) => (
  <div className="mb-4 flex justify-center items-center mx-auto w-full bg-gray-100 shadow-xl">
    <div className='m-2 text-gray-500 shadow-sm'>
      <select
        className="p-2 border rounded"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

    <div className='m-2 text-gray-500 shadow-sm'>
      <select
        className="p-2 border rounded"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="timestamp">Sort by Date</option>
        <option value="totalPrice">Sort by Price</option>
      </select>
    </div>



  
  </div>
);

export default React.memo(FilterSortControls);