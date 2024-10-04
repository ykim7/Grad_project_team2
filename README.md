# PRJ666-TEAM2

## 1. Project Overview
### 1.1 Problem Statement
In the context of Seneca's educational ecosystem, a persistent challenge has been the absence of comprehensive and interconnected platforms for students to efficiently share information, access academic resources, and engage in real-time communication. This fragmentation affects not only students but also faculty and administrative staff at Seneca. The repercussions include increased time and effort for students to gather information, resulting in inefficient learning environments and diminished community engagement.

### 1.2 Solution
Our project addresses the challenge by offering an integrated solution that consolidates essential information sources into a single platform. This platform aims to facilitate effective communication among users—students, faculty, and administrative staff—while fostering a robust and real-time community. By unifying these aspects, our solution strives to streamline the information-sharing process, enhance access to academic resources, and create an environment that encourages active participation and collaboration within the Seneca community.

### 1.3 Key Features
1. **Unified Information Hub**: A centralized platform aggregating crucial information sources, eliminating the need for students to navigate disjointed systems.
3. **Real-time Communication**: Tools for seamless and instant communication, promoting efficient collaboration among students, faculty, and staff.
4. **Academic Resource Repository**: A comprehensive repository for academic resources, ensuring easy access to materials that support learning.
5. **Community Engagement Features**: Interactive features that encourage community engagement, such as forums, events, and collaborative initiatives.
6. **User-Friendly Interface**: An intuitive interface designed to enhance user experience, making navigation and interaction straightforward.

### 1.4 Target Audience
This platform is designed to cater to the needs of Seneca's students, faculty, and administrative staff, fostering a collaborative and connected educational community.

### 1.5 Project Goals
1. **Information Integration**: Consolidate disparate information sources into a unified platform for seamless access.
2. **Enhanced Communication**: Facilitate real-time communication channels to improve collaboration and community engagement.
3. **Efficient Resource Access**: Provide a centralized repository for academic resources to streamline information retrieval.
4. **Community Building**: Cultivate a vibrant and collaborative community by encouraging active participation and interaction.

## 2. Project Source Code
[PRJ666-TEAM2-FRONTEND](https://github.com/rlatls96/PRJ666_Team2)<br>
[PRJ666-TEAM2-BACKEND](https://github.com/semetea/prj666-team2-backend)

## 3. Project Technical Document
### 3.1 Architecture
![diagram](https://github.com/rlatls96/PRJ666_Team2/assets/55260856/97c086b7-e65d-4f86-bd9c-c754a138e619)

### 3.2 Database Schema
![image](https://github.com/rlatls96/PRJ666_Team2/assets/55260856/1f21b802-22c4-4527-9586-cf899489ef5b)

### 3.3 Frontend
#### 3.3.1 Page Components

##### Forum Page

---

###### Description

The `ForumPage` component dynamically renders different forum pages based on the `name` prop.

###### Props

| Prop Name | Type | Description |
| --------- | ---- | ----------- |
| name      | String | Specifies the type of forum page to render. Possible values: "communityForum," "educationMaterial," "fleaMarket," "jobForum," "lectureEvaluation," "login," "register," "roommateFind," "userProfile," "main." |

###### Usage

Integrate the `ForumPage` component and pass the `name` prop to specify the type of forum page to render.

###### Examples

```html
<!-- Render the Job Forum Page -->
<ForumPage name={"jobForums"} />

<!-- Render the Education Material Page -->
<ForumPage name={"educationMaterials"} />

<!-- Render the Flea Market Page -->
<ForumPage name={"fleaMarkets"} />

<!-- ... and so on for other forum pages -->
```

##### ForumContentPage

---

###### Description

The `ForumContentPage` component is similar to `ForumPage` and dynamically renders different content-based forum pages based on the `name` prop.

###### Props

| Prop Name | Type | Description |
| --------- | ---- | ----------- |
| name      | String | Specifies the type of content-based forum page to render. Possible values: "specificContentPage1," "specificContentPage2," "specificContentPage3," and so on. |

###### Usage

Integrate the `ForumContentPage` component and pass the `name` prop to specify the type of content-based forum page to render.

###### Examples

```html
<!-- Render Specific Content Page 1 -->
<ForumContentPage name="specificContentPage1"></ForumContentPage>

<!-- Render Specific Content Page 2 -->
<ForumContentPage name="specificContentPage2"></ForumContentPage>

<!-- Render Specific Content Page 3 -->
<ForumContentPage name="specificContentPage3"></ForumContentPage>

<!-- ... and so on for other content-based forum pages -->
```

##### ForumPostPage

---

###### Description

The `ForumPostPage` component is similar to `ForumPage` and `ForumContentPage` and dynamically renders different forum post pages based on the `name` prop.

###### Props

| Prop Name | Type | Description |
| --------- | ---- | ----------- |
| name      | String | Specifies the type of forum post page to render. Possible values: "jobForums," "fleaMarket," "roommateFind," and so on. |

###### Usage

Integrate the `ForumPostPage` component and pass the `name` prop to specify the type of forum post page to render.

###### Examples

```html
<!-- Render Job Forums Post Page -->
<ForumPostPage name="jobForums"></ForumPostPage>

<!-- Render Flea Market Post Page -->
<ForumPostPage name="fleaMarket"></ForumPostPage>

<!-- Render Roommate Find Post Page -->
<ForumPostPage name="roommateFind"></ForumPostPage>

<!-- ... and so on for other forum post pages -->
```

##### LoginPage

---

###### Description

The `LoginPage` component provides a login interface for users to authenticate into the system.

###### Usage

Integrate the `LoginPage` component to allow users to log in.

###### Examples

```html
<LoginPage></LoginPage>
```

##### RegisterPage

---

###### Description

The `RegisterPage` component allows users to register for a new account.

###### Usage

Integrate the `RegisterPage` component to provide users with a registration form.

###### Examples

```html
<RegisterPage></RegisterPage>
```

##### UserProfilePage

---

###### Description

The `UserProfilePage` component displays user information and allows users to manage their profiles.

###### Usage

Integrate the `UserProfilePage` component to show user details and enable profile management.

###### Examples

```html
<UserProfilePage></UserProfilePage>
```

##### Chat Component

---

###### Description

The `Chat` component provides a real-time communication interface for users to interact with each other through rooms.

###### Features

- Real-time messaging
- Room creation
- User-to-user communication within rooms

###### Usage

Integrate the `Chat` component into your application to enable users to create rooms and communicate in real-time.

###### Examples
```
<!-- Render Chat for Room Creation -->
<Chat />
```

#### 3.3.2 Other Components
##### Forum_horizontal Component

---

###### Description

The `Forum_horizontal` component is used to display a preview of forums within the `ForumPage` component. It provides a horizontal layout for presenting forum information.

###### Features

- Preview of forum content
- Horizontal layout for effective presentation

###### Props

| Prop Name      | Type   | Description                                     |
| -------------- | ------ | ----------------------------------------------- |
| id             | String | The unique identifier of the forum.              |
| name           | String | The name or identifier of the forum.            |
| title          | String | The title of the forum.                          |
| content        | String | The content or preview of the forum.            |
| color          | String | The color associated with the forum.            |
| price          | String | The price associated with the forum (if any).   |

###### Usage

Integrate the `Forum_horizontal` component into your `ForumPage` to display previews of forums.

###### Examples

```html
<!-- Render Forum Horizontal Preview -->
<Forum_horizontal
  id={123}
  name="sampleForum"
  title="Sample Forum"
  content="This is a preview of the forum content."
  color="sampleColor"
  price="$19.99"
/>
```

##### Forum_vertical Component

---

###### Description

The `Forum_vertical` component is used to display important academic dates from Seneca's official website in a vertical layout.

###### Features

- Display of academic dates
- Vertical layout for effective presentation

###### Props

| Prop Name      | Type   | Description                                     |
| -------------- | ------ | ----------------------------------------------- |
| term           | String | The term or semester for which academic dates are displayed. |
| year           | String | The year for which academic dates are displayed. |

###### Usage

`Forum_vertical` component display important academic dates within the `MainPage` component.

###### Examples

```html
<!-- Render Academic Dates for the Current Term and Year in Vertical Layout -->
<Forum_vertical
  term="Fall"
  year="2023"
/>
```

##### NavigationBar Component

---

###### Description

The `NavigationBar` component provides a sidebar navigation menu with icons and links for seamless user navigation.

###### Features

- User-friendly navigation
- Icons for different sections
- Dynamic rendering based on user authentication

###### Props

None

###### Usage

Integrate the `NavigationBar` component into your application to enable users to navigate through different sections.

###### Examples

```jsx

<NavigationBar />
```

#### 3.3.3 Dependencies
```
"dependencies": {
  "@reduxjs/toolkit": "^1.9.7",                 // Toolkit for efficient Redux development
  "axios": "^1.5.0",                            // HTTP client for making requests to external APIs
  "font-awesome": "^4.7.0",                     // Icon set and toolkit
  "react": "^18.2.0",                           // Core library for building user interfaces in React
  "react-dom": "^18.2.0",                       // Core library for rendering React components in the DOM
  "react-infinite-scroll-component": "^6.1.0",  // Infinite scroll component for React
  "react-redux": "^8.1.3",                      // Official React bindings for Redux
  "react-router-dom": "^6.16.0",               // Declarative routing for React.js
  "react-scripts": "5.0.1",                     // Create React App scripts for project bootstrapping
  "react-scroll-to-bottom": "^4.2.0",           // Scroll to the bottom of a container component
  "redux": "^4.2.1",                            // Predictable state container for JavaScript apps
  "redux-devtools-extension": "^2.13.9",        // Browser extension to inspect Redux state
  "redux-persist": "^6.0.0",                    // Persist and rehydrate a Redux store
  "socket.io": "^4.7.2",                        // Library for real-time web applications with WebSocket support
  "socket.io-client": "^4.7.2",                 // Client-side library for connecting to a Socket.IO server
  "web-vitals": "^2.1.4"                         // Library for measuring web performance metrics
},

"devDependencies": {
  "@testing-library/jest-dom": "^6.1.5",         // Custom Jest matchers for testing
  "@testing-library/react": "^14.1.2",           // Testing utilities for React applications
  "axios-mock-adapter": "^1.22.0",               // Mock adapter for Axios requests in tests
  "husky": "^8.0.3",                             // Git hooks to run scripts before committing or pushing
  "jest": "^29.7.0",                             // JavaScript testing framework
  "lint-staged": "^14.0.1",                      // Run linters on pre-committed files
  "prettier": "3.0.3",                           // Code formatter for maintaining code style consistency
  "react-test-renderer": "^18.2.0",              // React renderer for Jest
  "redux-mock-store": "^1.5.4",                  // Mock store for testing Redux applications
  "redux-thunk": "^2.4.2",                       // Middleware for handling asynchronous actions with Redux
  "tailwindcss": "^3.3.3"                        // Utility-first CSS framework
}
```

#### 3.3.4 Getting Started
1. Clone the repository.
2. Install dependencies: `npm install`
4. Run the application: `npm start`
5. You can create your account with Register button in main page.

### 3.4 Backend
#### Description

The backend component consists of an Express server that serves as the API for the application. It handles various endpoints to facilitate communication between the frontend and the database.

#### Features

- RESTful API endpoints
- Middleware for authentication
- Integration with mysql database

#### 3.4.1 API endpoint

| Endpoint | Method | Description | Parameters (optional) | 
| --------- | ------ | ----------- | ---------------------- | 
| `/` | GET | Default endpoint | None |
| `/api/renew-token` | GET | Renew authentication token | None |
| `/api/users/:id` | GET | Retrieve user information | None |
| `/api/users/register` | POST | User registration | None |
| `/api/users/login` | POST | User login | None |
| `/api/users/logout` | POST | User logout | None | 
| `/api/users/profile` | GET, PUT, DELETE | Manage user profile | None |
| `/api/jobForums` | GET, POST | Retrieve or create job forum posts | `limit`, `category` |
| `/api/jobForums/:id` | GET, DELETE | Retrieve or delete a specific job forum post | None |
| `/api/comments/jobForums/:id` | GET | Retrieve comments for a specific job forum post | None |
| `/api/comments/jobForums` | POST | Add a comment to a job forum post | None |
| `/api/comments/communityForums/:id` | GET | Retrieve comments for a specific community forum post | None | 
| `/api/comments/communityForums` | POST | Add a comment to a community forum post | None |
| `/api/comments/educationalMaterials/:id` | GET | Retrieve comments for a specific educational material | None |
| `/api/comments/educationalMaterials` | POST | Add a comment to an educational material | None | 
| `/api/comments/fleaMarkets/:id` | GET | Retrieve comments for a specific flea market post | None |
| `/api/comments/fleaMarkets` | POST | Add a comment to a flea market post | None | 
| `/api/comments/lectureEvaluations/:id` | GET | Retrieve comments for a specific lecture evaluation | None | 
| `/api/comments/lectureEvaluations` | POST | Add a comment to a lecture evaluation | None |
| `/api/comments/roommateFindForum/:id` | GET | Retrieve comments for a specific roommate find forum post | None |
| `/api/comments/roommateFindForum` | POST | Add a comment to a roommate find forum post | None | 
| `/api/comments/:id` | DELETE | Delete a specific comment | None | 
| `/api/communityForums` | GET, POST | Retrieve or create community forum posts | `limit`, `category` |
| `/api/communityForums/:id` | GET, DELETE | Retrieve or delete a specific community forum post | None | 
| `/api/communityForums/incrementHelpful/:id` | PUT | Increment "helpful" count for a community forum post | None | 
| `/api/educationalMaterials` | GET, POST | Retrieve or create educational materials | `limit` | 
| `/api/educationalMaterials/:id` | GET, DELETE | Retrieve or delete a specific educational material | None | 
| `/api/fleaMarkets` | GET, POST | Retrieve or create flea market posts | `limit`, `category` | 
| `/api/fleaMarkets/:id` | GET, DELETE | Retrieve or delete a specific flea market post | None |
| `/api/lectureEvaluations` | GET, POST | Retrieve or create lecture evaluations | `limit` | TBD |
| `/api/lectureEvaluations/:id` | GET, DELETE | Retrieve or delete a specific lecture evaluation | None |
| `/api/roommateFindForum` | GET, POST | Retrieve or create roommate find forum posts | `limit` | 
| `/api/roommateFindForum/:id` | GET, DELETE | Retrieve or delete a specific roommate find forum post | None |
| `/api/scraper` | GET | Scrape data | None |
| `/api/scraper/:term/:year` | GET | Scrape data with specific term and year | None |

#### 3.4.2 Middleware
- **Aunthentication**: The backend utilizes JSON Web Tokens (JWT) for user authentication. JWTs are issued upon successful user login and are used to authorize subsequent requests.

#### 3.4.3 Dependencies

```
"dependencies": {
  "@babel/register": "^7.22.15",     // Babel register for using Babel in Node.js
  "axios": "^1.6.2",                 // HTTP client for making requests to external APIs
  "bcryptjs": "^2.4.3",              // Library for hashing and salting passwords
  "cheerio": "^1.0.0-rc.12",         // jQuery-like library for parsing HTML on the server-side
  "cors": "^2.8.5",                  // Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express
  "dotenv": "^16.3.1",                // Loads environment variables from a .env file
  "ejs": "^3.1.9",                   // Embedded JavaScript templating engine for rendering views in Express
  "express": "^4.18.2",               // Web framework for building the server-side of web applications
  "express-react-views": "^0.11.0",   // Express view engine for rendering React components
  "express-session": "^1.17.3",      // Session middleware for Express
  "jsonwebtoken": "^9.0.2",           // Library for creating and verifying JSON Web Tokens (JWT)
  "mysql2": "^3.6.1",                 // MySQL database driver for Node.js
  "react": "^16.14.0",                // Core library for building user interfaces in React
  "react-dom": "^16.14.0",            // Core library for rendering React components in the DOM
  "socket.io": "^4.7.2"               // Library for real-time web applications with WebSocket support
},

"devDependencies": {
  "@babel/cli": "^7.22.15",           // Babel command-line interface
  "@babel/core": "^7.22.20",          // Babel core functionality
  "@babel/preset-env": "^7.22.20",    // Babel preset for compiling modern ECMAScript to a specified environment
  "@babel/preset-react": "^7.22.15",  // Babel preset for compiling React code
  "babel-loader": "^9.1.3",           // Webpack loader for transpiling Babel code
  "husky": "^8.0.3",                  // Git hooks to run scripts before committing or pushing
  "lint-staged": "^14.0.1",           // Run linters on pre-committed files
  "nodemon": "^3.0.1",                // Development server that automatically restarts on file changes
  "prettier": "3.0.3"                 // Code formatter for maintaining code style consistency
}
```

#### 3.4.4 Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up the database (if applicable).
4. Run the server: `npm start`

## 4. Deviation from Project Plan (PRJ566)

### Milestone 1.0: Login and Role-based Access Control

**Deviation Explanation:**

The implementation of Single Sign-On (SSO) using MySeneca accounts could not be completed successfully due to the absence of necessary permissions and authority within our team. This limitation of authority was an unforeseen factor, leading us to consider alternative authentication methods and to explore potential cooperation with MySeneca in the future.

### Milestone 9.0: User Feedback and Continuous Improvement

**Deviation Explanation:**
Due to the extensive development efforts invested in our application, we regrettably did not have sufficient time to conduct a comprehensive review. Additionally, as our application was deployed just a week ago, we haven't had ample time to collect feedback from users. As of the current release:

- **User Feedback Collection:** The mechanisms for collecting user feedback through surveys, social media, and email have not been fully implemented. We acknowledge the importance of user feedback and plan to incorporate these features in future updates.

- **Dedicated Team for Review:** Given the time constraints, we haven't established a dedicated team to systematically review and address user feedback. However, we are committed to building a feedback-centric approach in subsequent releases.

### Milestone 10.0: Analytics and Performance Monitoring

**Deviation Explanation:**
Milestone 10.0 aimed to integrate analytical tools, monitor application performance, and conduct regular performance and security audits. Presently:

- **Analytical Tools Integration:** Full integration of analytical tools into the platform has not been achieved. Comprehensive analytics are still under development.

- **Real-time Monitoring and Alerts:** The establishment of real-time monitoring and alerts for downtime or performance issues is a work in progress.

- **Performance and Security Audits:** Regular performance and security audits have not been conducted as planned. We recognize the significance of these audits and plan to initiate them in future iterations to ensure the platform's stability and security.

## 5. Instructions on how to run the system

- **Access URL:** To access our system, please use the following public URL: (https://fanciful-arithmetic-90c6bc.netlify.app/)
  
- **Recommended Browser:** For the best experience, we recommend using Google Chrome as your browser. Chrome has been thoroughly tested for compatibility with our system.
  
- **Usernames and Passwords:**
  
Existing Users: If you already have an account, please use your existing username and password to log in.

- Username: admin@myseneca.ca
- Password: Asdfg1234!

New Users: If you do not have an account, you can register for a new one on the login page. Follow the registration prompts to set up your new account.

- Note: Whether you are an existing or a new user, it is important to handle your login credentials securely. Do not share your username and password with others.

- **Login Steps:**
  
1. Go to the provided URL.
2. Log in with your username and password, or register for a new account if you are a new user.
3. Once logged in, you will be directed to the main dashboard of the system.
