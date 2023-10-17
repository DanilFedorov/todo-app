import { createRoot } from 'react-dom/client';
import App from './components/app'
import './index.css'

const root = createRoot(document.querySelector('body'));

root.render(<App />);