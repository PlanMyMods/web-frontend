# SMU Mods

In this project, we aim to build a web-based application for SMU students to be able to plan their school modules and have a clear visual to their planned timetable and graduation journey. An all-in-one university focused web-based application for students, by students.

# Objectives

1. Currently, there is another similar site that offers a similar service to our proposed solution. However, as students, we have noticed that some features are quite limited. There is no display of what is currently being offered and the site is focused on reviews. While reviews are useful, they do not help in planning our timetable to optimise our term. Hence, our focus would be on the timetable where students can use to plan for the semester and bidding needs.

2. Our site will allow the user to look at the catalogue of modules. From there, users will get to select the modules they want to bid, check the pre-requisites and see if it will fit their timetable. For this aspect, we particularly aim to simplify the bidding process for students as despite the availability of data for past year bids, the BOSS platform does not allow for easy comparison and data insights.

3. From there, our users will be able to read reviews and get a sense of whether the mod is useful for them.

# Development

Run the following command to setup and run a local copy of the project.

```bash
# create a .env file from the sample
# remember to update the values in the env file with the right values!
cp ./.env.sample ./.env
```

```bash
# clone the project
git clone https://github.com/SMU-IS216G6T10/smumods-frontend.git
```

```bash
# install dependencies
npm ci
```

```bash
# launch development environment
npm run dev
```

# Deployment

This project is deployed automatically via [Netlify](https://www.netlify.com/) on push to the `main` branch.

To mimic a production deployment, run:

```bash
# build the app
npm run build
```

```bash
# install serve, a static site, single page application server
npm install -g serve

# -s flag means to serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
```

<!--
### CORS

If your static frontend is deployed to a different domain from your backend API, you will need to properly configure [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
-->

# Account
You could either create an account on the website or use an existing test account below:

- Email: test@smu.edu.sg
- Password: test@smu.edu.sg

# Authors
IS216 G6 Team 10
- David Lin
- Gabriel Wong
- Jerome Wong
- Nicklaus Chiok
- Ong Zi Jian
