# RetroPricer

RetroPricer is an innovative web application that provides video game enthusiasts with the latest pricing trends for various gaming consoles. It leverages the power of AWS services to scrape eBay listings and presents the data through a dynamic and interactive front-end interface built with React and TailwindCSS.

## Features

- **Real-time Data**: Updates every 6 hours to ensure the latest console prices from eBay are reflected.
- **Interactive Graphs**: Users can click on any of the 10 different consoles to view pricing data over the past 3 weeks.
- **Time Filters**: Interactive buttons allow users to filter data views to 1 day, 2 days, etc., with the graph dynamically updating to reflect these changes.
- **Supabase Integration**: Currently used for storing console descriptions and poised to support a future login system and user wishlist feature.

## Upcoming Features

- **User Authentication**: Plan to implement a login system where users can have personalized experiences.
- **Wishlist**: Users will be able to add consoles to their wishlist and keep track of desired items.
- **Price Alerts**: Feature to allow users to receive email notifications when a console's price drops below a set threshold.

## Technologies Used

- **Front-End**: React with TypeScript for type-safe code and TailwindCSS for styling.
- **Back-End**: AWS Lambda functions orchestrated by AWS EventBridge for scraping eBay listings, with data stored in S3 buckets.
- **Data Visualization**: Interactive graphs rendered with Chart.js.
- **Database**: Supabase for storing non-pricing related data.

## Development Setup

To contribute to ConsolePricer, you'll need to set up your development environment.

```bash
# Clone the repository
git clone https://github.com/your-username/consolepricer.git

# Navigate to the project directory
cd consolepricer

# Install dependencies
npm install

# Set up the necessary local environment variables
cp .env.example .env
# Then edit .env with your API keys and database credentials

# Run the application locally
npm start
