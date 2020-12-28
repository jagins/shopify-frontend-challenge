<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]+
[![Netlify Status](https://api.netlify.com/api/v1/badges/10473bbf-805e-451e-8001-2a0986d5087f/deploy-status)](https://app.netlify.com/sites/pensive-mayer-1745b6/deploys)



<!-- PROJECT LOGO -->
<br />

  <h3 align="center">Shopify Front End Challenge</h3>

  <p align="center">
    This web application allows the user to search the OMDB API to display and the search results and allows users to select up to 5 movies to add to their nomination list.
    <br />
    <br />
    <a href="https://pensive-mayer-1745b6.netlify.app/">View Demo</a>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

We'd like a simple to use interface that makes it easy to:
* Search OMDB and display the results (movies only)
* Add a movie from the search results to our nomination list
* View the list of films already nominated
* Remove a nominee from the nomination list


### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [JavaScript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)



<!-- GETTING STARTED -->
## Getting Started

To get started using this application follow the steps listed below under installation:

### Prerequisites

This application uses yarn. If you want to use npm feel free to delete the yarn.lock file before installing the dependencies.
* yarn
  ```sh
  yarn install
  ```
* npm
  ```sh
  npm install
  ```

### Installation

1. Get a free API Key at [OMDB](http://www.omdbapi.com/apikey.aspx)
2. Fork the repo then clone the application using the clone button and paste the link that looks like the one below into your terminal
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
   Install Yarn packages
   ```sh
   yarn install
   ```
4. Create `.env` file to enter your API Key
   ```sh
   REACT_APP_API_KEY = 'ENTER YOUR API';
   ```


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Josh Agins - jagins629@gmail.com

Project Link: [https://pensive-mayer-1745b6.netlify.app/](https://pensive-mayer-1745b6.netlify.app/)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Img Shields](https://shields.io)
* [Netlify](https://netlify.com)
* [Material-UI](https://material-ui.com)
* [Axios](https://www.npmjs.com/package/axios)
* [Sweet Alert](https://sweetalert.js.org/)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/jagins/shopify-frontend-challenge/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/joshua-agins
