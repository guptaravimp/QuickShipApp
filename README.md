# DeliveryApp using React + Vite + Tailwind Css
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules

This is a React-based web application that allows users to:
1- View a list of available products.
2- Estimate delivery based on the pincode entered.
3- Access additional sections for security information and promotional slides.
# Live Application
The application is hosted on Vercel and can be accessed https://quick-ship-app.vercel.app/

# Project Structure

DeliveryApp
├── public
│   ├── products.csv
│   ├── stock.csv
│   └── pincodes.csv
├── src
│   ├── components
│   │   ├── CountdownTimer.jsx
│   │   ├── Navbar.jsx
│   ├── pages
│   │   ├── ProductList.jsx
│   │   ├── DeliveryEstimator.jsx
│   │   ├── SecurityPurpose.jsx
│   │   ├── SlideItem.jsx
│   │   └── stylepages.css
│   ├── utils
│   │   ├── deliveryUtils.js
│   │   └── pincodeValidator.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json

# Getting Started
1- Prerequisites
(i) Node.js (v14 or above)
(ii) npm

# Steps to Set Up Locally
1- Clone the Repository:
git clone https://github.com/your-username/DeliveryApp.git
cd DeliveryApp

2- Install Dependencies: Make sure you are in the project directory, then install the dependencies:
npm install
# or
yarn install

3- Run the Development Server: Start the Vite development server locally:
npm run dev
# or
yarn dev
This command starts the application, which you can access by opening http://localhost:3000 in your browser.
4- Testing CSV Data: Ensure that the CSV files (products.csv, stock.csv, pincode.csv) are correctly placed in the public folder. The application will read data from these files for product availability, stock, and delivery estimations.


# Deployment Instructions (Vercel)
1- Steps to Deploy on Vercel
Create a Vercel Account: Go to Vercel and create an account 
2- Import Project from GitHub:
On the Vercel dashboard, click New Project.
Select Import Git Repository and choose your DeliveryApp repository.
3- Configure Build and Deployment Settings:
Vercel will auto-detect your project settings for a Vite-based app.
No special environment variables are needed for this setup if all data is in the public folder.
Vercel should auto-configure the build command to npm run build and output directory to dist.
Deploy: Click Deploy to initiate the deployment. Once completed, you’ll receive a live URL https://quick-ship-app.vercel.app/

View Live Application: Access the live application through the provided URL for testing.




Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
