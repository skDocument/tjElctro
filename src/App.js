import {React , useState} from 'react';
import Table from './table';
import { data } from './data';
import './style.css';

export default function App() {
  const [sort , setSort] = useState('')
  const [searchTerm , setSearchTerm] = useState('')

  const searchState = event =>{
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <button onClick={()=>setSort('Name')}>Sort by name</button>
      <button onClick={()=>setSort("Brith")}>Sort by birth date</button>
      <input type="text" placeholder="Search by name or email" onChange={searchState} />
      <Table data={data} sort={sort} searchTerm={searchTerm} />
    </div>
  );
}
