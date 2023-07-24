import React from "react";
// import "./styles/App.css";
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import PageContainer from "./components/PageContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <PageContainer/>
    </div>
  );
}

export default App;
