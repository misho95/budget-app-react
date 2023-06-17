import FilterBar from "./components/filterBar";
import TopStats from './components/topstats';
import Invoices from './components/invoices';
import MidStats from "./components/midstats";

function Home( {data, deleteInv} ){
    return(
        <>
            <FilterBar />
            <TopStats data={data} />
            <MidStats data={data} />
            <Invoices data={data} deleteInv={deleteInv} />
        </>
    )
}

export default Home;