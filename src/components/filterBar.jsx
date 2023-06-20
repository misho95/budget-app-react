import { useRef } from "react";

function FilterBar({data, setFilter}){

    const date = useRef();
    const category = useRef();
    const min = useRef();
    const max = useRef();
    
    const filterInvoice = (e) => {
        e.preventDefault();
        const dat = date.current.value;
        const cat = category.current.value;
        const minVal = min.current.value;
        const maxVal = max.current.value;

        let filterData = data;

        if(dat){
            filterData = filterData.filter( (inv) => {
                if(dat === inv.date) return inv;
            })
        }

            if(cat){
                filterData = filterData.filter( (inv) => {
                    if(cat === inv.category) return inv;
                })
            }

            if(minVal){
                filterData = filterData.filter( (inv) => {
                    if(minVal < +inv.amount) return inv;
                })
            }

            if(maxVal){
                filterData = filterData.filter( (inv) => {
                    if(maxVal > +inv.amount) return inv;
                })
            }
     

            console.log(filterData);
        setFilter(filterData);
    }

    return(
        <div className="w-full flex justify-between">
           <form onSubmit={filterInvoice} className="w-full flex flex-col sm:flex-row gap-3 justify-around items-center">

                    <input ref={date} type="date" className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 rounded-md p-1 min-w-fit"/>

                    <select ref={category} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 rounded-md p-1">
                        <option>Any</option>
                        <option>shopping</option>
                        <option>gym</option>
                        <option>family</option>
                        <option>invoice</option>
                        <option>other</option>
                    </select>

                    <input ref={min} type="text" placeholder="min" className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 rounded-md p-1"/>

                    <input ref={max} type="text" placeholder="max" className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 rounded-md p-1"/>

                <button className="bg-purple-300 py-2 px-4 rounded-md text-purple-700 shadow-sm">Filter</button>
           </form>
        </div>
    )
}

export default FilterBar;