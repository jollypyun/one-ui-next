import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Trade from "./trade";

const MainPage = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Trade />
    </QueryClientProvider>
  )
}


export default MainPage;