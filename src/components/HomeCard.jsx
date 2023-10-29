import React from 'react';

import {Link} from 'react-router-dom';

function HomeCard({data}) {
  return (
    <div>
      <article>
        <Link to={`/main/${data.id}/1`}>
          <p>{data.id}차시</p>
        </Link>
      </article>
    </div>
  );
}

export default HomeCard;