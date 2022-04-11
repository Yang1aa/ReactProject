import React from 'react';
import App from './App';

import { createRoot } from 'react-dom/client';

import localUtils from './utils/localUtils';
import memoryUtils from './utils/memoryUtils';

const user = localUtils.getUser();
memoryUtils.user = user;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);