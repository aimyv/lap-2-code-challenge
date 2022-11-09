# stash. - Lap 2 Code Challenge

## Description

This application allows users to share their thoughts with others. It consists of a register page, login page and dashboard. If a user attempts to register with a username that's already present in the database, they will be instructed to try again with a different username via an alert. Similarly, if they attempt to login with an incorrect username or password. At the top of their dashboard, they can submit a post via a form. Below this, they can view their feed. Users have the option to submit their post anonymously. Clicking the anon toggle on the form will list 'anonymous' on the post whereas leaving it free will list their username on the post. Once a post has been submitted, it will be displayed on their feed in reverse chronological order.

## Installation

- Download this repository or clone it by entering `git clone https://github.com/aimyv/lap-2-code-challenge.git` in your terminal.
- Navigate to the `lap-2-code-challenge` repository and open it in your favourite IDE - we used Visual Studio Code.
- Run `npm i` on the IDE terminal to install all dependencies.

## Usage

- Open index.html in the client folder with live server to see the frontend.
- Run `bash scripts/start.sh` to start the backend.
- Run `bash scripts/stop.sh` to tear everything down.

## Technologies

### HTML/CSS

We used HTML to structure the application and CSS to style it.

### JavaScript/Express.js

JavaScript was used in the client folder to fetch data from the API. It was used to create a REST API with `get` and `post` routes for users and posts. This allowed the application to:

- fetch all posts,
- publish a new post,
- register a new user,
- and deliver login functionality.

### MongoDB

We opted to use MongoDB to hold and persist our data.

### Docker

Docker was used to establish a connection to our database and API. We have installed scripts to help launch our server and tear it down.
