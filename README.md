# Fintrack Financial Management System
This is a personal finance management system built in TypeScript and PHP 

## Features
- Budget Planning: Users can set budgets for different categories (e.g., bills, personal expenses, savings) at the beginning of each month
- Spending Tracking: Throughout the month, users can log their transactions, providing a clear view of where their money is going.
- Asset price prediction with Machine Learning: Provided by a Python backend
- Goal setting: Allows users to define and track their financial objectives and the system will track their progress, providing reminders and insights to help them stay on track.
- Financial data visualization: This feature offers a comprehensive and intuitive visual representation of the user's financial data

## Built With
- TypeScript
- Webpack
- PHP
- MySQL
- Jest testing suite
- Docker
  
## Installation
### Clone repository
Clone repo into xampp/htdocs folder
```
git clone https://github.com/joshuaobare/financial-management.git
cd financial-management
```

### Run database
Import sql dump file i.e. /database/financial_management.sql into phpmyadmin

### Install packages and start client
After cloning the repo and while in the root directory, run the following commands in the terminal.
```
npm install
npm run build
```
### With Docker
Ensure Docker is installed. Then start the container with:
```
docker compose up
```

## Testing
After installation the test suite can be ran with:
```
npm run test
```
