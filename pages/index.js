import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Trade from "./trade";
import App from "./_app";

const MainPage = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Trade />
    </QueryClientProvider>
  )
}

export default MainPage;