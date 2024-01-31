# RetroPricer

RetroPricer is an innovative web application that provides video game enthusiasts with the latest pricing trends for various gaming consoles. It leverages the power of AWS services to scrape eBay listings and presents the data through a dynamic and interactive front-end interface built with React and TailwindCSS.

## What Is RetroPricer?
Retropricer is a web app that tracks pricing of retro video game consoles! How does it work? There are multiple AWS Lambda functions set to periodically scrape eBay listings. Specifically, the prices of these consoles are processed to determine an average price for each model. This average price, along with other metadata such as timestamps and range data (minimum and maximum prices), is then stored in an S3 bucket. The frontend of the web app leverages this data, displaying the average prices on a graph for a visual representation of market trends. Additionally, it computes an overall average price, aggregating all historical data since the inception of the tracking functions, to provide a comprehensive view of price fluctuations over time.

## Why? 
As someone who enjoys playing video games, and has for my entire life, I really do have a passion for video games. I also enjoy full-stack web development, and I wanted to delve into AWS and some of its services. So I thought, why not combine two things I am passionate about? Lastly, I thought it might be interesting to see prices of retro video game consoles on the second hand market, as I feel theres a few things we can learn. The secondary market for retro consoles is rich with data that tells a story beyond just numbers. By analyzing pricing trends, I aim to uncover insights such as the factors driving the valuation of these consoles. Is it nostalgia, rarity, or perhaps the physical attributes like weight affecting shipping costs? How does the abundance of a console in the market influence its price point? As the project evolves, I anticipate it will reveal more about consumer behavior, market dynamics, and perhaps even broader trends in technology appreciation and collectibility. 

## Features

- **Real-time Data**: Updates every 6 hours to ensure the latest console prices from eBay are reflected.
- **Interactive Graphs**: Users can click on any of the 10 different consoles to view pricing data over the past 3 weeks.
- **Time Filters**: Interactive buttons allow users to filter data views to 1 day, 2 days, etc., with the graph dynamically updating to reflect these changes.
- **Supabase Integration**: Currently used for storing console descriptions and poised to support a future login system and user wishlist feature.

## Upcoming Features

- **User Authentication**: Plan to implement a login system where people can create an account
- **Wishlist**: Users will be able to add consoles to their wishlist and keep track of desired items.
- **Price Alerts**: Feature to allow users to receive email notifications when a console's price drops below a set threshold.

## Technologies Used

- **Front-End**: React with TypeScript for type-safe code and TailwindCSS for styling.
- **Back-End**: AWS Lambda functions orchestrated by AWS EventBridge for scraping eBay listings, with data stored in S3 buckets.
- **Data Visualization**: Interactive graphs rendered with Chart.js.
- **Database**: Supabase for storing non-pricing related data.

## Images
![Alt text for the image](/images/Screenshot%202024-01-31%20at%205.02.10%20PM.png)
![Alt text for the image](/images/Screenshot%202024-01-31%20at%205.36.03%20PM.png)
![Alt text for the image](/images/Screenshot%202024-01-31%20at%205.02.01%20PM.png)
![Alt text for the GIF](/images/demo.gif)


## Development Setup

To contribute to retroPricer, you'll need to set up your development environment.

```bash
# Clone the repository
git clone https://github.com/your-username/retropricer.git

# Navigate to the project directory
cd retropricer

# Install dependencies
npm install

# Set up the necessary local environment variables
cp .env.example .env
# Then edit .env with your API keys and database credentials

# Run the application locally
npm start
