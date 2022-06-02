import AuthContextProvider from "../../contexts/AuthContext";
import PostContextProvider from "../../contexts/PostContext";
import ProductContextProvider from "../../contexts/ProductContext";

const ContextProviders = ({ children }) => {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <ProductContextProvider>{children}</ProductContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  );
};

export default ContextProviders;
