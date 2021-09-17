import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES=[
    {id:'q1', author:'max', text:'Learning React is fun!'},
    {id:'q2', author:'mark', text:'Learning Html is fun!'},
];

const QuoteDetail = () => {
    const param = useParams();

    const quote=DUMMY_QUOTES.find(quote=>quote.id===param.quoteId);
    if(!quote){
        return<p>No quote Found!</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <p>{param.quoteId}</p>
            <Route path={`/quotes/${param.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>);
};

export default QuoteDetail;