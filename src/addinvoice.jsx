import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

function addinvoice( {setNewData} ){

    const date = useRef();
    const income = useRef();
    const category = useRef();
    const amount = useRef();
    const form = useRef();

    const getIcon = (val) => {
        switch(val){
            case 'shopping':
                return 'storefront'
            case 'gym':
                return 'exercise'
            case 'family':
                return 'family_restroom'
            case 'invoice':
                return 'request_page'
            case 'other':
                return 'payments'
        };
    }

    const addinvoice = (e) => {
        e.preventDefault();
       const newInvoice = {
        id: uuidv4(),
        date: date.current.value,
        type: income.current.checked ? true : false,
        category: category.current.value,
        amount: amount.current.value,
        icon: getIcon(category.current.value)
       }
       setNewData(newInvoice);
       form.current.reset();
    }

    const changeOptions = () => {
        if(income.current.checked){
            category.current.innerHTML = '<option>invoice</option><option>other</option>';
        } else {
            category.current.innerHTML = ' <option>shopping</option><option>gym</option><option>family</option><option>invoice</option><option>other</option>';
        }
    }

    return(
        <>
            <div className="flex justify-center items-center">
                <a href="/" className="bg-purple-300 p-3 rounded-full flex justify-center items-center text-purple-800">
                    <span className="material-symbols-outlined">
                        home
                    </span>
                </a>
            </div>
            <div className="p-2 flex justify-center items-center">
                <form ref={form} onSubmit={addinvoice} className="w-full sm:w-1/2 flex flex-col text-gray-600 dark:text-gray-300 gap-3">
                        <fieldset className="border-2 border-gray-300 dark:border-gray-600 p-2">
                            <legend className="px-2 ">Date</legend>
                            <input ref={date} type="date" className="bg-gray-200 dark:bg-gray-800 w-full py-1 px-2 focus:outline-none" required/>
                        </fieldset>
                        <fieldset className="border-2 border-gray-300 dark:border-gray-600 p-2">
                            <legend className="px-2 ">Type</legend>
                          
                                Income
                                <input type="radio" name="income" ref={income} onChange={changeOptions}/>
                    
                                Expense
                                <input type="radio" name="income" onChange={changeOptions}/>
                
                        </fieldset>
                        <fieldset className="border-2 border-gray-300 dark:border-gray-600 p-2">
                            <legend className="px-2 ">Category</legend>
                            <select ref={category} className="bg-gray-200 dark:bg-gray-800 w-full py-1 px-2 focus:outline-none" required>
                                <option>shopping</option>
                                <option>gym</option>
                                <option>family</option>
                                <option>invoice</option>
                                <option>other</option>
                            </select>
                        </fieldset>
                        <fieldset className="border-2 border-gray-300 dark:border-gray-600 p-2">
                            <legend className="px-2 ">Amount</legend>
                            <input ref={amount} type="text" placeholder="amount.." className="bg-gray-200 dark:bg-gray-800 w-full py-1 px-2 focus:outline-none" required/>
                        </fieldset>
                        <button className="bg-purple-300 text-purple-800 p-3">Add New Invoice</button>
                </form>
            </div>
        </>
    )
}

export default addinvoice;