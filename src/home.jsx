import { useState, useEffect } from "react";
import FilterBar from "./components/filterBar";
import TopStats from './components/topstats';
import Invoices from './components/invoices';
import MidStats from "./components/midstats";

function Home( {data, deleteInv} ){

    const [ filter, setFilter ] = useState([]);
    
    return(
        <>
            <FilterBar data={data} setFilter={setFilter}/>
            <TopStats data={data} />
            <MidStats data={data} />
            <Invoices data={filter.length > 0 ? filter : data} deleteInv={deleteInv} />
        </>
    )
}

export default Home;