import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "76vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
