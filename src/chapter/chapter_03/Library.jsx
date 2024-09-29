import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="책1" numOfPage={100} />
      <Book name="책2" numOfPage={200} />
      <Book name="책3" numOfPage={300} />
    </div>
  )
}

export default Library;