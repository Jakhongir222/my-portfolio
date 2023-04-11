import React from 'react'
import '../styles/Projects.css';
import shoes from '../images/shoes.png';
import puppy from '../images/puppy.png';
import workout from '../images/workout.png';
import travel from '../images/travel.png';
import fly from '../images/fly.png';
import tales from '../images/tales.png';

export const Projects = () => {
  return (
    <div id="projects" className='project-container'>
      <h1>Projects</h1>
        <div className='project-card'>
            <img src={shoes} alt="shoes" height={260} />
            <h1>Step up Shoes</h1>
            <h3>E-commerce site to purchase shoes</h3>
            <p>E-Commerce App, a full stack application that allows users to browse and purchase shoes for Men's, Women's, 
              and Children's categories. It is built using Java and PostgresSQL in the backend and in the frontend Next13. 
              It is deployed on Ralways for backend and Vercel for frontend.</p>
            <a href="https://e-commerce-app-frontend-kr7m.vercel.app/" target="_blank" rel="noopener noreferrer" className="live-button">Live demo</a>
            <a href="https://github.com/Jakhongir222/e-commerce-app-frontend.git" target="_blank" rel="noopener noreferrer" className="repo-button" >Source code</a>
        </div>
        <div className='project-card'>
            <img src={puppy} alt="puppy page" height={260} />
            <h1>Jak's puppy rescue</h1>
            <h3>Puppies API where you can do all crud operations</h3>
            <p>I created an API that allows you to display the initial puppies that exist in the DB on first load.
              It has the possibility to add a new puppy, update an existing puppy and able to delete a puppy from the DB.
              I used Java with PostgresSQL in the backend and React Typescript in the frontend. It is deployed in Railways and Vercel
            </p>
            <a href="https://puppies-api-frontend-git-main-jakhongir222.vercel.app/" target="_blank" rel="noopener noreferrer" className="live-button">Live demo</a>
            <a href="https://github.com/Jakhongir222/puppies-api-frontend.git" target="_blank" rel="noopener noreferrer" className="repo-button" >Source code</a>
        </div>
        <div className='project-card'>
            <img src={workout} alt="workout page" height={260} />
            <h1>Shape Up</h1>
            <h3>Personal fitness app</h3>
            <p>I created ShapeUp because I kept forgetting which part to workout when I arrive to the gym. I always wondered 
              was it Leg day or arm day..? It happened especially when I missed a workout day. So I created this app to keep track 
              of my workouts. The app was developed using React, Node.js v19, and was deployed on Vercel.</p>
              <a href="https://fitness-app-git-main-jakhongir222.vercel.app/" target="_blank" rel="noopener noreferrer" className="live-button">Live demo</a>
              <a href="https://github.com/Jakhongir222/fitness-app.git" target="_blank" rel="noopener noreferrer" className="repo-button" >Source code</a>
        </div>
        <div className='project-card'>
            <img src={travel} alt="travel page" height={260} />
            <h1>PLanet B</h1>
            <h3>Travel blog</h3>
            <p>Full - stack appliaction that is build using Java, PostgresSQL and Next.js. It fetches the countries from backend
              and displays them in frontend. The UI has an intereactive button that shows you which country you will be visiting next.
              The backend is deployed on Railway and the frontend is deployed on Vercel
            </p>
            <a href="https://travel-blog-frontend-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="live-button">Live demo</a>
            <a href="https://github.com/Jakhongir222/travel-blog-frontend.git" target="_blank" rel="noopener noreferrer" className="repo-button" >Source code</a>
        </div>
        <div className='project-card'>
            <img src={fly} alt="fly page" height={260} />
            <h1>Fly with me</h1>
            <h3>Flight finder between Amsterdam, Stockholm and Oslo</h3>
            <p>This app is a full-stack application built using React, Java and PostgresSql. It only shows the flights between Stockholm, Amsterdam and Oslo. 
              It filters the flights by the location, and the time span that was chosen.
              </p>
              <a href="https://flight-finder-frontend-jakhongir222.vercel.app/" target="_blank" rel="noopener noreferrer" className="live-button">Live demo</a>
              <a href="https://github.com/Jakhongir222/flight-finder-frontend.git" target="_blank" rel="noopener noreferrer" className="repo-button" >Source code</a>
        </div>
        <div className='project-card'>
            <img src={tales} alt="tales page" height={260} />
            <h1>Tiny Tales</h1>
            <h3>Categorized blog with different stories</h3>
            <p>Tiny Tales is a blog  that is categorized by its categories. It displays the posts as a list of cards. With a clear paragraph body
               and title for each card. It also includes the tags at the bottom of the card. It has a dropdown for each section. So you can 
               show and hide the posts for each section. It is developed in React with TypeScript and deployed on Vercel</p>
               <a href="https://tiny-blog.vercel.app/" target="_blank" rel="noopener noreferrer" className="live-button">Live demo</a>
               <a href="https://github.com/Jakhongir222/tiny-blog.git" target="_blank" rel="noopener noreferrer" className="repo-button" >Source code</a>
        </div>
    </div>
  )
}
