import { OrderRowProps } from '@/types'; //import orderRowProps
import React from 'react';



const OrderRow = ({ order, handleCompleteOrder, loginStatus, authError }: OrderRowProps) => (

  <tr
    className="bg-white text-gray-500 border-b border-blue-400 
      hover:opacity-80 hover:bg-slate-50"
    key={order.id}
  >
    <td className="border-b px-6 py-4 text-gray-500">{order.id}</td>

    <td className="px-6 py-4 border-b">{order.customer}</td>

    <td className="px-6 py-4 border-b">{order.items.join(', ')}</td>

    {/* Total Price (formatted to 2 decimal places) */}
    <td className="px-6 py-4 border-b">${order.totalPrice.toFixed(2)}</td>

    {/* Order Status (with conditional styling) */}
    <td
      className={`
        ${order.status.toLowerCase() === 'completed'
          ? 'text-green-600 px-6 py-4 border-b' // Green text for completed orders
          : 'text-yellow-500 px-6 py-4 border-b' // Yellow text for pending orders
        }
      `}
    >
      {order.status}
    </td>

    {/* Order Timestamp (formatted to locale string) */}
    <td className="px-6 py-4 border-b">
      {new Date(order.timestamp).toLocaleString()}
    </td>

    {/* Actions (Complete Order button) */}
    <td className="px-6 py-4 border-b">
      <button
        className={`px-6 py-4 rounded ${order.status === 'Pending'
          ? 'bg-yellow-500 text-white hover:bg-blue-600' // Yellow button for pending orders
          : 'bg-green-300 cursor-not-allowed text-white' // Green disabled button for completed orders
          }`}
        disabled={order.status === 'Completed'} // Disable button if order is completed
        onClick={() => {
          if (loginStatus == false) {
            authError()
          }
          else {
            handleCompleteOrder(order.id)
          }
        }} // Trigger complete order action
      >
        {order.status.toLowerCase() === 'completed'
          ? 'Order Completed' // Text for completed orders
          : 'Complete Order' // Text for pending orders
        }
      </button>
    </td>
  </tr>
);

// Export the component with React.memo for performance optimization
export default React.memo(OrderRow);