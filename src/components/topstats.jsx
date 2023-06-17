import { useEffect, useRef } from "react";

function TopStats({data}){

    const incomeElement = useRef();
    const expenseElement = useRef();
    const diffElement = useRef();

    const countStats = () => {
        const filter = (type) => {
            const invIncome = data.filter( (inv) => {
                if(inv.type === type) return inv;
            });
            const income = invIncome.reduce( (val, el) => {
                return val+= +el.amount;
            }, 0)

            return income;
        }
        
       const income = filter(true);
       const expense = filter(false);
       incomeElement.current.textContent = `Income ${income}`;
       expenseElement.current.textContent = `Expense ${expense}`;
       diffElement.current.textContent = `Difference ${income - expense}`;

    }

useEffect( () => {
    countStats();
}, [data]);


    return(
        <div id="topStats" className="flex flex-col sm:flex-row justify-center items-center gap-3 text-gray-600 dark:text-gray-300 text-lg">
               <span className="bg-green-100 text-green-800 py-1 px-2 rounded-lg shadow-sm" ref={incomeElement}></span>
               <span className="bg-purple-200 text-purple-800 py-1 px-2 rounded shadow-sm" ref={diffElement}></span>
               <span className="bg-red-200 text-red-800 py-1 px-2 rounded shadow-sm" ref={expenseElement}></span>
        </div>
    )
}

export default TopStats;