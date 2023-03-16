<h1>Shoe Shop Web App - React &amp; Redux Project</h1>
      <p>
        This is a web application for an online shoe shop that allows users to
        browse and filter through a list of products and add them to a shopping
        cart. The app is built using React, Redux, TypeScript, and other
        third-party libraries.
      </p>
      <h2>Installation</h2>
      <p>To install this project, follow the steps below:</p>
      <ol>
        <li>
          Clone the repository to your local machine using the following
          command:
        </li>
      </ol>
      <pre>
<code>https://github.com/sorousch9/SusuShop.git
</code>
</pre>
      <ol start="2">
        <li>Navigate to the project directory using the following command:</li>
      </ol>
      <pre>
<code>cd SusuShop
</code>
</pre>
      <ol start="3">
        <li>
          Install the project dependencies by running the following command:
        </li>
      </ol>
      <pre><code >npm install
</code></pre>
      <ol start="4">
        <li>Install json-server globally by running the following command:</li>
      </ol>
      <pre><code >npm install -g json-server
</code></pre>
      <ol start="5">
        <li>Install json-server globally by running the following command:</li>
      </ol>
      <pre><code >json-server --watch db.json --port 5000
</code></pre>
      <ol>
        <li>
          If you encounter the error "json-server cannot be loaded because
          running scripts is disabled on this system", open your PowerShell as
          an administrator or normal and set its execution policy with the
          following command:
        </li>
      </ol>
      <pre><code >Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
</code></pre>
      <h2>Package.json</h2>
      <p>
        The project's <code>package.json</code> file includes the necessary
        dependencies for this project, including:
      </p>
      <ul>
        <li><code>@reduxjs/toolkit</code> for Redux store management</li>
        <li><code>@testing-library/react</code> for testing</li>
        <li><code>axios</code> for fetching data from API</li>
        <li><code>bootstrap</code> for styling</li>
        <li><code>react-bootstrap</code> for Bootstrap components</li>
        <li><code>react-icons</code> for icons</li>
        <li><code>react-redux</code> for React-Redux binding</li>
        <li><code>react-router-dom</code> for routing</li>
        <li><code>redux</code> for state management</li>
        <li><code>redux-persist</code> for persisting Redux store data</li>
        <li><code>sass</code> for styling</li>
        <li><code>swiper</code> for carousel</li>
        <li><code>web-vitals</code> for measuring web performance</li>
      </ul>
      <p>
        In addition, the <code>scripts</code> section includes the following
        commands:
      </p>
      <ul>
        <li><code>start</code> for starting the development server</li>
        <li><code>build</code> for building the production-ready app</li>
        <li><code>test</code> for running tests</li>
        <li>
          <code>eject</code> for ejecting from Create React App configuration
        </li>
      </ul>
      <p>
        The <code>eslintConfig</code> section extends the
        <code>react-app</code> and <code>react-app/jest</code> configurations,
        while the <code>browserslist</code> section defines the supported
        browsers for production and development environments.
      </p>
      <h2>Running the App</h2>
      <p>To start the development server, run the following command:</p>
      <code>npm <span>start</span> </code>
      <p>This will start the app on <code>http://localhost:3000/</code>.</p>
      <p>To build the production-ready app, run the following command:</p>
      <div><code>npm run build </code></div>
      <p>
        This will create an optimized production build in the
        <code>build</code> directory.
      </p>
      <h2>Conclusion</h2>
      <p>
        Thank you for checking out this project. If you have any questions or
        feedback, feel free to contact me at.
      </p>

![full Home Page](/public/githubImg/Home.png?raw=true "full Home Page")
<br />
![Cart Page](/public/githubImg/cart.png?raw=true "Cart Page")
<br/>
![products List Page](/public/githubImg/productsList.png?raw=true "products List Page")
<br/>
![Singleproduct Page](/public/githubImg/Singleproduct.png?raw=true "Singleproduct Page")
