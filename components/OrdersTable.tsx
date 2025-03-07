"use client" // client-side rendering, use of hooks

import React, { useEffect, useState, useMemo } from 'react';

import OrderRow from './OrderRow';
import FilterSortControls from './FilterSortControls';
import Loader from './Loader';
import data from '@/utils/data.json'; // Import JSON data
import { OrderType } from '@/types';

const OrdersTable = () => {
  // State to store the list of orders
  const [orders, setOrders] = useState<OrderType[]>([]);
  // State to manage loading state
  const [loading, setLoading] = useState(true);
  // State to manage the filter status (e.g., 'All', 'Completed')
  const [filterStatus, setFilterStatus] = useState('All');
  // State to manage the sorting criteria (e.g., 'timestamp', 'totalPrice')
  const [sortBy, setSortBy] = useState('timestamp');

  // Constants for filter and sort options
  const FILTER_STATUS = {
    ALL: 'All',
    COMPLETED: 'Completed',
  };

  const SORT_BY = {
    TIMESTAMP: 'timestamp',
    TOTAL_PRICE: 'totalPrice',
  };

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        //console.log(data); // Log the imported data for debugging
        setOrders(data as OrderType[]); // Set the orders state with the imported data
      } catch (error) {
        console.error('Error fetching orders:', error); // Log any errors
      } finally {
        setLoading(false); // Set loading to false once data is fetched (or if an error occurs)
      }
    };

    fetchOrders();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to mark an order as completed
  const handleCompleteOrder = (orderId: string) => {
    setOrders((prevOrders) => {
      // Find the order to update
      const orderToUpdate = prevOrders.find((order) => order.id === orderId);

      // If the order is not found, log an error and return the previous state
      if (!orderToUpdate) {
        console.error(`Order with ID ${orderId} not found.`);
        return prevOrders;
      }

      // Update the order status to "Completed"
      return prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: FILTER_STATUS.COMPLETED } : order
      );
    });
  };

  // Memoized function to filter orders based on the selected status
  const filteredOrders = useMemo(() => {
    return orders.filter((order) =>
      filterStatus === FILTER_STATUS.ALL ? true : order.status === filterStatus
    );
  }, [orders, filterStatus]); // Re-run when orders or filterStatus changes

  // Memoized function to sort orders based on the selected criteria
  const sortedOrders = useMemo(() => {
    return filteredOrders.sort((a, b) => {
      if (sortBy === SORT_BY.TIMESTAMP) {
        // Sort by timestamp (newest first)
        return new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf();
      } else if (sortBy === SORT_BY.TOTAL_PRICE) {
        // Sort by total price (highest first)
        return b.totalPrice - a.totalPrice;
      }
      return 0; // Default: no sorting
    });
  }, [filteredOrders, sortBy]); // Re-run when filteredOrders or sortBy changes

  // Display a loader while data is being fetched
  if (loading) {
    return <Loader />;
  }

  // Render the orders table with filter and sort controls
  return (
    <div>
      {/* Component for filtering and sorting controls */}
      <FilterSortControls
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Table to display orders */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th className="px-6 py-4 border-b">Order ID</th>
              <th className="px-6 py-4 border-b">Customer Name</th>
              <th className="px-6 py-4 border-b">Items Ordered</th>
              <th className="px-6 py-4 border-b">Total Price</th>
              <th className="px-6 py-4 border-b">Status</th>
              <th className="px-6 py-4 border-b">Order Timestamp</th>
              <th className="px-6 py-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Render each order as a row using the OrderRow component */}
            {sortedOrders.map((order) => (
              <OrderRow
                key={order.id}
                order={order}
                handleCompleteOrder={handleCompleteOrder}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Export the component with React.memo for performance optimization
export default React.memo(OrdersTable);