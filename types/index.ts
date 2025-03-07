
export interface FilterSortControlsProps{
    filterStatus: string,
    setFilterStatus :(filterStatus:string) =>void, 
    sortBy:string, 
    setSortBy:(sortBy:string) =>void
}


export interface OrderType {
        id: string,
        customer: string,
        items: ["Burger", "Fries", "Coke"],
        totalPrice: number,
        status: string,
        timestamp: any
}

export interface OrderRowProps{
   order: OrderType,
   handleCompleteOrder:(order:string) =>void

}


