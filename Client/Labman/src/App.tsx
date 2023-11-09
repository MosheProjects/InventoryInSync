import { QueryClient, QueryClientProvider } from 'react-query'
import Dashboard from './Pages/Dashboard/Dashboard'

export default function App() {

    const queryClient = new QueryClient()



  return (
    <div>
        <QueryClientProvider client={queryClient}>
        <Dashboard/>
        </QueryClientProvider>
    </div>
  )
}
