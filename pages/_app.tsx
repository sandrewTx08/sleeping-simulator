import type { AppProps } from "next/app";
import GenderProvider from "@/contexts/gender";
import AgeProvider from "@/contexts/age";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AgeProvider>
      <GenderProvider>
        <Component {...pageProps} />
      </GenderProvider>
    </AgeProvider>
  );
}
