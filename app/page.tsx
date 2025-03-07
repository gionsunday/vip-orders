import Image from 'next/image'
import {OrderRow, OrdersTable} from '@/components'
import { data } from '@/utils'

export default async function Home() {


  console.log(data)
  
  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
       <OrdersTable />
      </div>

    </main>
  )
} 
