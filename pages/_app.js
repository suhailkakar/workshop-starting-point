import client from "@/client/livepeer";
import "@/styles/globals.css";
import { LivepeerConfig } from "@livepeer/react";

export default function App({ Component, pageProps }) {
  return (
    <LivepeerConfig client={client}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}
