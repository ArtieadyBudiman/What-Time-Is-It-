import { useState, useEffect } from 'react/cjs/react.development';
import axios from "axios";

const Quotes = ()=>{
   const [author, setAuthor] = useState("");
   const [quotes, setQuotes] = useState("");
   
   useEffect(() => {
      const getQuotes = () => {
         axios({
            method: "get",
            url: "https://api.quotable.io/random",
         }).then((res) => {
               setAuthor(res.data.author);
               setQuotes(res.data.content);
            });
         };
         getQuotes();

      const displayQuotes = setInterval(() => {getQuotes()}, 60000 * 5);
   
      return () => {
         clearInterval(displayQuotes);
      };
      }, []);

   return (
      <div className="quotesContainer">
         <div className="quotes">
            <p>{`"${quotes}"`}</p>
         </div>
         <div className="author">
            <p>{`~ ${author}`}</p>
         </div>
      </div>
   )
}

export default Quotes;
