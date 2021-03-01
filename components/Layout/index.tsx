import Head from "next/head";
import { FC } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

interface LayoutProps {
  meta: MetaData;
}
interface MetaData {
  title: string;
  description: string;
}
const Layout: FC<LayoutProps> = ({ children, meta }) => {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
