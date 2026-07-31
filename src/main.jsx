import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GitHubUserSearchApp } from './GitHubUserSearchApp.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

window.__TANSTACK_QUERY_CLIENT__ = queryClient;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GitHubUserSearchApp />
    </QueryClientProvider>
  </StrictMode>,
);
