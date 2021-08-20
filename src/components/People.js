import React, {useEffect, useState} from 'react'


export default function People() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0)
  const api = 'https://swapi.dev/api/people/';

  const getPeople = async () => {
    const res = await fetch(`${api}?page=${page +1}`);
    const data = await res.json();
    setList(prev => [...prev, ...data.results]);
    setPage(page => page + 1);
    setTotalCount(data.count)
  }
  useEffect(
      () => getPeople(), []);
      
  return (
    <div>
      {list.map(el => <li key={el.url}>{el.name}</li>)}
      {totalCount > list.length && <button onClick={getPeople}>Next</button>}
    </div>
  )
}
