<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/SMU-IS216G6T10/smumods-frontend">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">BeforeClass</h3>

  <p align="center">
    In this project, we aim to build a web-based application for SMU students to be able to plan their school modules and have a clear visual to their planned timetable and graduation journey. An all-in-one university focused web-based application for students, by students.
    <br />
    <a href="https://github.com/SMU-IS216G6T10/smumods-frontend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://beforeclass.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/SMU-IS216G6T10/smumods-frontend/issues/new?assignees=&labels=&template=bug_report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/SMU-IS216G6T10/smumods-frontend/issues/new?assignees=&labels=&template=feature_request.md&title=">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `BeforeClass`, `project_description`

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Vue.js](https://vuejs.org/)
- [Angular](https://angular.io/)
- [Svelte](https://svelte.dev/)
- [Laravel](https://laravel.com)
- [Bootstrap](https://getbootstrap.com)
- [JQuery](https://jquery.com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Run the following command to setup and run a local copy of the project.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the project

```bash
git clone https://github.com/SMU-IS216G6T10/smumods-frontend.git
```

2. Create a .env file from the sample

   > !! Remember to update the values in the env file with the right values!

```bash
cp ./.env.sample ./.env
```

3. Install dependencies

```bash
npm ci
```

```bash
# launch development environment
npm run dev
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

# Deployment

This project is deployed automatically via [Netlify](https://www.netlify.com/) with hooks listening on push to the `main` branch and every pull request.

To mimic a production deployment, run:

## Prerequisite

1. install serve, a static site, single page application server

```bash
npm install -g serve
```

## Mimicking production on local

1. Build the app

```bash
npm run build
```

2. Serve the app on a mimicked production environment
   > -s flag means to serve it in Single-Page Application mode
   > which deals with the routing problem below

```bash
serve -s dist
```

## Deploying on external servers

- [Deploying on Netlify](https://www.netlify.com/blog/2019/11/30/how-to-deploy-a-vue-site/)

## CORS

If your static frontend is deployed to a different domain from your backend API, you will need to properly configure [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- LICENSE -->

<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- CONTACT -->

## Contact

David Lin - david.lin.2021@smu.edu.sg

Project Link: [https://github.com/SMU-IS216G6T10/smumods-frontend](https://github.com/SMU-IS216G6T10/smumods-frontend)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

IS216 G6 Team 10

- [David Lin](https://github.com/DavidLHW)
- [Jerome Wong](https://github.com/jeromeandrewong)
- [Ong Zi Jian](https://github.com/ong-zijian)
- [Nicklaus Chiok](https://github.com/chiok1)
- [Gabriel Wong](https://github.com/GabeW8)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/SMU-IS216G6T10/smumods-frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/SMU-IS216G6T10/smumods-frontend
[forks-shield]: https://img.shields.io/github/forks/SMU-IS216G6T10/smumods-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/SMU-IS216G6T10/smumods-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/SMU-IS216G6T10/smumods-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/SMU-IS216G6T10/smumods-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/SMU-IS216G6T10/smumods-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/SMU-IS216G6T10/smumods-frontend/issues
[product-screenshot]: .github\images\BeforeClass.png
