
# DeliveryApp
## Live Link: https://quick-ship-app.vercel.app/
### Developed a delivery estimation application using React, Vite, and CSV data files to provide a user-friendlyexperience for product selection and delivery timeline estimates

DeliveryApp is a React-based application for managing product delivery estimates based on user-selected products and pincode-based logistics. It calculates and displays estimated delivery dates for orders based on various logistics providers and includes a real-time countdown timer for same-day delivery.

● Built a scalable delivery app leveraging React and React Router to manage navigation and dynamic data.

● Integrated CSV data with PapaParse for accurate product availability and delivery estimates by pin code.

● Added a countdown timer for same-day cutoff alerts and reusable components for easy navigation and data
# Project Structure





![Screenshot 2024-10-28 195537](https://github.com/user-attachments/assets/95d8bfba-df07-4ce2-9284-f296d4d3223d)


# Setup React Vite + Tailwind 
## Step 1: Create a Vite Project:

1. Open your terminal and navigate to the directory where you want to create your project.
2. Run the following command to create a new Vite project:
```bash
npm create vite@latest DeliveryApp -- --template react
```
3. Change to the project directory:
Run the following command 
```bash
 cd DeliveryApp
```
## Step 2: Install Tailwind CSS

1. Install Tailwind CSS and its dependencies:
```bash
npm install -D tailwindcss postcss autoprefixer
```
2. Initialize Tailwind CSS:
Run the following command 
```bash
 npx tailwindcss init -p
```
## Step 3: Configure Tailwind CSS
1. Open the tailwind.config.js file and update the content array to include your project files:
```bash
 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

```
2. Open your main CSS file (typically located at src/index.css) and add the following lines to include Tailwind's base, components, and utilities:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;

```
## Step 4: Run the Development Server
Start the development server locally:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Open your browser and navigate to http://localhost:5173 (the default port) to see your React app with Tailwind CSS set up.

# Deploying It on Github 
## Step 1: Initialize Git and Create a Repository
1. Initialize a Git repository (if you haven’t already):
```bash
git init
```
2. Add your files to the repository:
```bash
git add .
```
3. Commit your changes:
```bash
git commit -m "Initial commit"

```
4. Create a new repository on GitHub:

Go to GitHub and create a new repository named DeliveryApp.

5. Link your local repository to GitHub:
```bash
git remote add origin https://github.com/guptaravimp/DeliveryApp.git
```
## Step 2: Deploy Your App
1. Run the deploy command:
```bash
npm run deploy
```
This command will build your app and push the contents of the dist folder to the gh-pages branch of your repository.
### Step 3: Access Your Deployed App
1. Open your browser and navigate to
```bash
npm run deploy
```


This command will build your app and push the contents of the dist folder to the gh-pages branch of your repository.

## Step 6: Access Your Deployed App
Open your browser and navigate to:
https://github.com/<User_name>/QuickShipApp

Documentation Links

For more detailed information, you can refer to the official documentation:

[[Vite Deployment Guide](https://react.dev/learn)](https://v3.vitejs.dev/guide/)

## Host Your Project On vercel 
1. Go to the Vercel website.
2. Click on the "Sign Up" button and create an account using GitHub, 
3. Select The repositiory and Import it 
4. and after this Deploy it 

