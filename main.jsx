// // import { StrictMode } from 'react';
// // import { createRoot } from 'react-dom/client';
// // import App from './App.jsx';
// // import './index.css';

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>
// // );

// // Create form data object
// let formData = {
//   message: '',
//   whatsapp: '',
//   date: '',
//   time: '',
//   email: ''
// };

// // Handle form submission
// function handleSubmit(e) {
//   e.preventDefault();
//   console.log('Form submitted:', formData);
// }

// // Handle input changes
// function handleChange(e) {
//   const { name, value } = e.target;
//   formData[name] = value;
// }

// // Clear form data
// function handleClear() {
//   formData = {
//     message: '',
//     whatsapp: '',
//     date: '',
//     time: '',
//     email: ''
//   };
  
//   // Reset form inputs
//   document.querySelectorAll('input, textarea').forEach(input => {
//     input.value = '';
//   });
// }

// // Create and render the app
// function createApp() {
//   const template = `
//     <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div class="max-w-xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
//         <div class="p-8">
//           <h2 class="text-2xl font-semibold text-gray-900 mb-6">New Message</h2>
          
//           <form id="messageForm" class="space-y-6">
//             <!-- Message Input -->
//             <div class="space-y-2">
//               <label class="flex items-center space-x-2 text-sm font-medium text-gray-700">
//                 <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//                   <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//                 </svg>
//                 <span>Message</span>
//               </label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
//                 placeholder="Enter your message here..."
//               ></textarea>
//             </div>

//             <!-- WhatsApp Number -->
//             <div class="space-y-2">
//               <label class="flex items-center space-x-2 text-sm font-medium text-gray-700">
//                 <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                 </svg>
//                 <span>WhatsApp Number</span>
//               </label>
//               <input
//                 type="tel"
//                 name="whatsapp"
//                 class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="+1 (555) 123-4567"
//               />
//             </div>

//             <!-- Date and Time Row -->
//             <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div class="space-y-2">
//                 <label class="flex items-center space-x-2 text-sm font-medium text-gray-700">
//                   <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//                     <line x1="16" y1="2" x2="16" y2="6"></line>
//                     <line x1="8" y1="2" x2="8" y2="6"></line>
//                     <line x1="3" y1="10" x2="21" y2="10"></line>
//                   </svg>
//                   <span>Date</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="date"
//                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div class="space-y-2">
//                 <label class="flex items-center space-x-2 text-sm font-medium text-gray-700">
//                   <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//                     <circle cx="12" cy="12" r="10"></circle>
//                     <polyline points="12 6 12 12 16 14"></polyline>
//                   </svg>
//                   <span>Time</span>
//                 </label>
//                 <input
//                   type="time"
//                   name="time"
//                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>

//             <!-- Email -->
//             <div class="space-y-2">
//               <label class="flex items-center space-x-2 text-sm font-medium text-gray-700">
//                 <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                   <polyline points="22,6 12,13 2,6"></polyline>
//                 </svg>
//                 <span>Email Address</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="example@email.com"
//               />
//             </div>

//             <!-- Submit Button -->
//             <div class="flex justify-end space-x-3">
//               <button
//                 type="button"
//                 class="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//                 onclick="handleClear()"
//               >
//                 Clear
//               </button>
//               <button
//                 type="submit"
//                 class="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   `;

//   const app = document.getElementById('app');
//   app.innerHTML = template;

//   // Add form event listeners
//   const form = document.getElementById('messageForm');
//   form.addEventListener('submit', handleSubmit);

//   // Add change event listeners to all inputs
//   form.querySelectorAll('input, textarea').forEach(input => {
//     input.addEventListener('change', handleChange);
//   });
// }

// // Initialize the app when the DOM is loaded
// document.addEventListener('DOMContentLoaded', createApp);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);