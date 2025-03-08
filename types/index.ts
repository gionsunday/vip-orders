/**My types declaration */
import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    constainerStyles? :string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: string
}


/**
 * Interface for the props of the `FilterSortControls` component.
 * Defines the properties required for filtering and sorting controls.
 */
export interface FilterSortControlsProps {
    filterStatus: string; // Current filter status (e.g., 'All', 'Pending', 'Completed')
    setFilterStatus: (filterStatus: string) => void; // Function to update the filter status
    sortBy: string; // Current sorting criteria (e.g., 'timestamp', 'totalPrice')
    setSortBy: (sortBy: string) => void; // Function to update the sorting criteria
}


/**
 * Interface representing an order.
 * Defines the structure of an order object.
 */
export interface OrderType {
    id: string; // Unique identifier for the order
    customer: string; // Name of the customer who placed the order
    items: string[]; // Array of items in the order
    totalPrice: number; // Total price of the order
    status: string; // Current status of the order (e.g., 'Pending', 'Completed')
    timestamp: string | Date; // Timestamp as a string or Date object
}

/**
 * Interface for the props of the `OrderRow` component.
 * Defines the properties required to render a single order row.
 */
export interface OrderRowProps {
    order: OrderType; // The order object to display
    loginStatus: boolean;
    authError:()=>void;
    handleCompleteOrder: (orderId: string) => {}// Function to mark an order as completed
}