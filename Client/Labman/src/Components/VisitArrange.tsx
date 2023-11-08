import {useQuery} from 'react-query'
import { getColumnNames } from '../Api/visits'


export default function VisitArrange() {

    const { isLoading, error, data}:any = useQuery('repoData',getColumnNames)
console.log(isLoading, error, data);

  return (
    <div>
        {isLoading +  error + data}
    </div>
  )
}

