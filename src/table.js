import  React ,{ useState , useEffect } from 'react';
import List from './List';

export default function Table({data , sort , searchTerm}) {

  const [myData , setMyData] = useState(data)

  // sort useEffect
  useEffect(()=>{

    // sorted by Name
    if(sort == 'Name'){
      const _sorted = [...myData].sort((a , b) => a.name.localeCompare(b.name))
      setMyData(_sorted)
    }

    // sorted by BrithDate
    else if(sort == 'Brith'){
      myData.forEach(user => {
        let time = new Date(user.birthDate)
        let sec = time.getTime()
        return user.birthDate = sec
      })
      
      let _sorted = [...myData].sort((a , b) => b.birthDate - a.birthDate)
      _sorted.forEach(user =>{
        let time = new Date(user.birthDate)
        let fullTime = time.toLocaleDateString().replaceAll('/' , '-')
        return user.birthDate = fullTime 
      })
      
      setMyData(_sorted)
    }
    
  } ,[sort])


  // search useEffect
  useEffect(()=>{
    let _result = myData.filter(user => {
      return user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm)
    })
    setMyData(_result)
    
    if(searchTerm == ''){
      setMyData(data)
    }

  } , [searchTerm])



  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Birth Date</th>
      </tr>

      {
        // fetche data with map
        myData 
        ? 
        myData.map(item => {
          return (<List key={item.id} data={item}/>)
        })
        :  

        // default data
        ( 
          <>     
            <tr>
              <td>Alfred</td>
              <td>Alfred@gmail.com</td>
              <td>2020-10-12</td>
            </tr>
            <tr>
              <td>John</td>
              <td>John@gmail.com</td>
              <td>2018-05-22</td>
            </tr>
          </>
        )
      }
    </table>
  );
}
