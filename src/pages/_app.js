import "@/styles/globals.css";
import store from "@/redux/store";
import { Provider } from "react-redux";
import Footer from "@/components/shared/Footer";
import NavbarHead from "@/components/shared/Navbar";
import { StyleProvider } from "@ant-design/cssinjs";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider session={pageProps.session}>
      <StyleProvider hashPriority="high">
        <Provider store={store}>
          <Toaster />
          <NavbarHead />
          <div className="mt-32">
            <Component {...pageProps} />
          </div>
          <Footer />
        </Provider>
      </StyleProvider>
    </SessionProvider>
  );
}
