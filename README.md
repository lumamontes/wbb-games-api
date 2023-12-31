# WNBA and NCAAW Schedule API

![image](https://github.com/lumamontes/wbb-games-api/assets/60052718/9e9a3e58-daf9-47fa-9695-c29a6f8a430c)


This project is an simple API for returning WNBA and NCAAW schedules! The API fetches data from external sources and provides access to the processed data.

## Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
  
## Getting Started

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository: 
```bash
git clone https://github.com/lumamontes/wbb-games-api.git
```
2. Navigate into the directory:
```bash 
cd wbb-games-api
```
3. Install the dependencies:
```bash
npm install
```

## Usage

Start the local server:
```bash
npm run dev
```

## API Endpoints

- `GET /schedule`: Fetches the schedule for a given date and league. The league defaults to "ncaaw" and the date for today.

  Query parameters:

  - `year`: The year of the schedule you want to fetch. Example: `2022`.
  - `month`: The month of the schedule you want to fetch. Example: `07`.
  - `day`: The day of the schedule you want to fetch. Example: `15`.
  - `league`: The league of the schedule you want to fetch. It can be either `ncaaw` or `wnba`, defaulting to `ncaaw`.

  **Example**: GET /schedule?year=2022&month=07&day=15&league=ncaaw

Any changes/suggestions are welcome :)
