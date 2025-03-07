"use client"

import React, { useEffect, useState, useMemo } from 'react';

import OrderRow from './OrderRow';
import FilterSortControls from './FilterSortControls';
import Loader from './Loader';
import { data } from '@/utils'
import { OrderType } from '@/types';

const OrdersTable = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('timestamp');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // console.log(data)
        setOrders(data as OrderType[]);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleCompleteOrder = (orderId: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: 'Completed' } : order
      )
    );
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) =>
      filterStatus === 'All' ? true : order.status === filterStatus
    );
  }, [orders, filterStatus]);

  const sortedOrders = useMemo(() => {
    return filteredOrders.sort((a, b) => {
      if (sortBy === 'timestamp') {
        return new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf();
      } else if (sortBy === 'totalPrice') {
        return b.totalPrice - a.totalPrice;
      }
      return 0;
    });
  }, [filteredOrders, sortBy]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
     <FilterSortControls
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

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

export default React.memo(OrdersTable);