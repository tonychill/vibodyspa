import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import AppProvider from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
