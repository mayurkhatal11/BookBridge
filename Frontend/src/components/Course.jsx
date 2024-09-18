import React from "react";
import Cards from './Cards';
import list from '../../public/list.json';
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-36 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem repellendus molestiae nemo earum odio sit, excepturi impedit repellat, consequatur, eveniet atque qui tempore quisquam consequuntur voluptatibus esse asperiores? Reiciendis exercitationem doloribus eveniet distinctio sit, facere laborum esse aliquid ea aspernatur, natus molestias alias, voluptatibus porro iusto fugit blanditiis culpa nulla.
          </p>
          <Link to="/">
            <button className="btn btn-secondary mt-6" href="/">Back</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
            {list.map((item)=> (
                <Cards key={item.id} item={item}/>
            ))}
        </div>
      </div>
    </>
  );
};

export default Course;
