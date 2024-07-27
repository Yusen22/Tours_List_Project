import { useEffect, useState } from "react";

import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const FetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url)
      const tours = await response.json();
      console.log(tours)
      setTours(tours)
    } catch (error) {
      console.log(error, 'this is an error');
    }
    setIsLoading(false)
  }

  useEffect(() => {
    FetchData();
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <div className="title">
        <h2 className="title">Our Tours</h2>
        <div className="title-underline"></div>
          <h5 style={{margin: '25px 0'}}>No tours available!</h5>
          <button className="btn" type="button" onClick={() => FetchData()}>Generate Tours</button>
        </div>
    )
  }

  return (
    <main>
      <h2 className="title">Our Tours</h2>
      <div className="title-underline"></div>
          <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>

  );
}

export default App;
