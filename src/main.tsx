import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundry';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);