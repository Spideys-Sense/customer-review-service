import React from 'react';

let ReviewListEntry = ({review}) => (
  <li>
    <header>
      <div>
        {/*image with # of stars*/}
        <h4>{review.title}</h4>
      </div>

      <p>By: {review.username} on {review.date}</p>
    </header>

    <main>
      <p>{review.body}</p>
      {/* image needs to be smaller */}
      <img src={review.imageUrl}></img>
    </main>

    <footer>
      <button>{review.likes} likes</button>
      <a href=''>Report</a>
    </footer>
  </li>
);

export default ReviewListEntry;