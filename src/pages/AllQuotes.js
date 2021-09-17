import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES=[
    {id:'q1', author:'max', text:'Learning React is fun!'},
    {id:'q2', author:'mark', text:'Learning Html is fun!'},
];
const AllQuotes=()=>{
    return <QuoteList quotes={DUMMY_QUOTES}/>
};

export default AllQuotes;