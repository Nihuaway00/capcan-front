import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import {Layout} from "./Layout";
import {Router} from "./Router";
import {QueryClient, QueryClientProvider} from "react-query";
import {Button, Modal} from "react-bootstrap";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <Layout>
              <Router />
          </Layout>
      </QueryClientProvider>
  </React.StrictMode>
);
