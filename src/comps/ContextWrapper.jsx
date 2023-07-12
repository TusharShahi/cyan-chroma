import Layout from "../comps/Layout.jsx";
import { ContextProvider } from "../tools/context";

const ContextWrapper = ({ children }) => {
  return (
    <ContextProvider>
      <Layout>{children}</Layout>
    </ContextProvider>
  );
};

export default ContextWrapper;
