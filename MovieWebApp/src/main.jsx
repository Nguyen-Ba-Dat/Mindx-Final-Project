import React from 'react';
import { createRoot } from 'react-dom/client'; // Thay đổi từ 'react-dom' sang 'react-dom/client'
import App from './App';

const container = document.getElementById('root'); // Tìm phần tử DOM có id là 'root'
const root = createRoot(container); // Tạo root mới

// Sử dụng root.render() để render ứng dụng
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
