import "./App.css";
import AuthContextProvider from "./components/context/AuthContextProvider";
import ProductContextProvider from "./components/context/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProductContextProvider>
          <MyRoutes />
        </ProductContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
