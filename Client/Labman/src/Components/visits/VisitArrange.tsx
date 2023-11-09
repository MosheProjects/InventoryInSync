import {useQuery} from 'react-query'
import { getColumnNames } from '../../Api/metadata'

export default function VisitArrange() {

        const { data, status } = useQuery('columns', async () => {
          const response = await getColumnNames("Visits");
          return response;
        });

console.log(data);

   



  return (
    <div className="App">
    {status === "error" && <p>Error fetching data</p>}
    {status === "loading" && <p>Fetching data...</p>}
    {status === "success" &&
      <div>
         {data?.map((item:any)=>{
           return( <div>{item}</div>)
                
         })}
      </div>
    }
  </div>
  )
}

