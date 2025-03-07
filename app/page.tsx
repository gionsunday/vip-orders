import { OrdersTable } from '@/components'; // Import the OrdersTable component

/**
 * Home page component.
 * This is the main page of the application, which displays the OrdersTable component.
 */
export default async function Home() {
  return (
    <main className="overflow-hidden">
      {/* Container for the OrdersTable component */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {/* Render the OrdersTable component */}
        <OrdersTable />
      </div>
    </main>
  );
}