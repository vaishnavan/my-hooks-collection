import React from 'react';
import ReactDOM from 'react-dom/client';
import { Timeout, Toggle } from './hooks';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
    <Toggle />
    <Timeout />
</>)