# Currency Converter Web Application

## Overview

This project is a web application that allows users to convert between Indian rupees (INR) and US Dollars (USD). It provides a simple interface where users can input an amount, select the source and target currencies, and view the converted amount. 

## Features

### 1. User Interface
- **Currency Selection:** Dropdown menus for selecting the source and target currencies.
- **Amount Input:** Input field for the amount to be converted.
- **Conversion Result:** Display area showing the converted amount.

### 2. Currency Conversion API
- **/convert:** Conversion between INR to USD vice versa.

### 3. Dynamic Currency Rates
- **Mock Rates:** Simulated conversion rates between INR and USD for demonstration purposes.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Package Manager:** npm

## Setup Instructions

### 1. Project Setup
1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/akhilesh-sahu12/Currency-Converter-web-app.git
    ```
2. Navigate into the project directory.
    ```bash
    cd Currency-Converter-web-app
    ```
3. Initialize a Node.js application and install necessary packages.
    ```bash
    npm init -y
    npm install express
    ```

### 3. Backend Development
1. Create an Express server (`server.js`) to serve the HTML file and handle API requests.
2. Implement the `/convert` endpoints.
3. Use a predefined object with mock exchange rates for the conversion logic.

### 4. Frontend Development
1. Create a simple HTML page (`index.html`) with:
    - A form for selecting currencies and inputting the amount.
    - A section for displaying the conversion result.
    
2. Use JavaScript to capture form submissions, make asynchronous requests to the backend, and update the DOM with the results.

### 5. Integration
1. On form submission, send a request to the `/convert` endpoint.

## Running the Application

1. Start the PostgreSQL server.
2. Run the Express server.
    ```bash
    node server.js
    ```
3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Future Enhancements

- **Live Exchange Rates:** Integrate with a real-time exchange rate API for dynamic conversion rates.
- **User Authentication:** Implement user accounts to track conversions individually.
- **Multiple Currency Support:** Extend support to additional currencies beyond INR and USD.


## Screenshots
![App Screenshot](https://github.com/akhilesh-sahu12/Currency-Converter-web-app/blob/master/public/screenshots/1.png)

![App Screenshot](https://github.com/akhilesh-sahu12/Currency-Converter-web-app/blob/master/public/screenshots/2.png)

![App Screenshot](https://github.com/akhilesh-sahu12/Currency-Converter-web-app/blob/master/public/screenshots/3.png) 
