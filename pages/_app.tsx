import "../styles/globals.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "../redux/store";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ToastContainer />
      </QueryClientProvider>
    </Provider>
  );
}
