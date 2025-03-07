import { OrderRowProps } from '@/types';
import React from 'react';


const OrderRow = ({ order, handleCompleteOrder }: OrderRowProps) => (
  <tr className="bg-white text-gray-500 border-b border-blue-400 
      hover:opacity-80 hover:bg-slate-50" key={order.id}>
    <td className=" border-b px-6 py-4 text-gray-500">{order.id}</td>
    <td className="px-6 py-4 border-b">{order.customer}</td>
    <td className="px-6 py-4 border-b">{order.items.join(', ')}</td>
    <td className="px-6 py-4 border-b">${order.totalPrice.toFixed(2)}</td>

    <td className={`
         ${order.status.toLowerCase() == "completed"
        ? "text-green-600 px-6 py-4 border-b"
        : "text-yellow-500 px-6 py-4 border-b"}
      `}>{order.status}</td>

    <td className="px-6 py-4 border-b">
      {new Date(order.timestamp).toLocaleString()}
    </td>
    <td className="px-6 py-4 border-b">
      <button
        className={`px-6 py-4 rounded ${order.status === 'Pending'
          ? 'bg-yellow-500 text-white hover:bg-blue-600'
          : 'bg-green-300 cursor-not-allowed text-white'
          }`}
        disabled={order.status === 'Completed'}
        onClick={() => handleCompleteOrder(order.id)}
      >
        {order.status.toLowerCase()
          == "completed" ? "Order Completed" : "Complete Order"}
      </button>
    </td>
  </tr>
);

export default React.memo(OrderRow);