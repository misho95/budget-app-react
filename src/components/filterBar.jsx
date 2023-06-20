import { useRef } from "react";

function FilterBar({data, setFilter}){

    const date = useRef();
    const category = useRef();
    const min = useRef();
    const max = useRef();
    
    const filterInvoice = (e) => {
        e.preventDefault();

const searchDate = date.current.value;
const searchCategory = category.current.value;
const minValue = min.current.value;
const maxValue = max.current.value;

const filteredData = data.filter(item => {
  const isDateMatched = !searchDate || item.date === searchDate;
  const isCategoryMatched = !searchCategory || item.category.toLowerCase() === searchCategory.toLowerCase();
  const isAmountMatched = (!minValue || +item.amount > minValue) && (!maxValue || +item.amount < maxValue);
  return isDateMatched && isCategoryMatched && isAmountMatched;
});
        setFilter(filteredData);
    }

    return(
        <div className="w-full flex justify-between">
           <form onSubmit={filterInvoice} className="w-full flex flex-col sm:flex-row gap-3 justify-around items-center">

                    <input ref={date} type="date" className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 rounded-md p-1 min-w-fit"/>

                    <select ref={category} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 rounded-md p-1">
                        <option></option>
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