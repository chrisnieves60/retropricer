# RetroPricer


## What is RetroPricer?

**RetroPricer** is a web app that tracks real-time pricing trends for retro video game consoles on the secondhand market. It scrapes eBay listings via AWS Lambda functions and processes the data to calculate average, min, and max prices per console model. These are stored in an S3 bucket and visualized through a sleek frontend built with React and TailwindCSS.

Users can explore:

- **Price trend graphs** by console  
- **Historical average prices** since tracking began  
- **Insights into pricing volatility and market movement**

---

## Why I Built It

I've always enjoyed video games and a full-stack development. I built RetroPricer as a fun way to go deep on AWS while also trying to gain insight on why prices vary so much between consoles, and why prices might fluctuate on these consoles.

This project is also an exploration into the psychology of pricing:

- Does **nostalgia** drive value more than rarity?  
- How do **listing volume** and **shipping costs** impact pricing?  
- Can we identify **collector trends** through raw data?

RetroPricer is both a tech sandbox and a data storytelling experiment. The goal: to learn more about market dynamics while building something cool and useful.

---
## Features

- **Real-time Data**: Updates every 6 hours to ensure the latest console prices from eBay are reflected.
- **Interactive Graphs**: Users can click on any of the 5 different consoles to view pricing data over the past year.
- **Time Filters**: Interactive buttons allow users to filter data views to 1 day, 2 days, etc., with the graph dynamically updating to reflect these changes.
- **Supabase Integration**: The goal is to implement authentication and have a price alert system to alert users when a given console drops below or above a certain price. 


## Upcoming Features

- **User Authentication**: Plan to implement a login system where people can create an account
- **Wishlist**: Users will be able to add consoles to their wishlist and keep track of desired items.
- **Price Alerts**: Feature to allow users to receive email notifications when a console's price drops below a set threshold.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![AWS][AWS]][AWS-url]
* [![Supabase][Supabase]][Supabase-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Images
![Alt text for the image](/images/Screenshot%202024-01-31%20at%205.02.10%20PM.png)
![Alt text for the image](/images/Screenshot%202024-01-31%20at%205.36.03%20PM.png)
![Alt text for the image](/images/ConsolesPage.png)
![Alt text for the GIF](/images/demo.gif)


## 🧪 Getting Started (Advanced Users)

To run RetroPricer locally, you’ll need:

- Access to an AWS S3 bucket with preprocessed pricing data
- A set of AWS Lambda functions scraping eBay listings and updating the bucket
- Your own `.env` file with credentials, bucket URLs, and config keys

> **Note:** This project was designed around AWS-first architecture and is not a turnkey solution. You’re welcome to explore the codebase for learning or inspiration!

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[AWS]: https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white
[AWS-url]: https://aws.amazon.com/
[Supabase]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
