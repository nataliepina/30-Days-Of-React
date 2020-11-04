// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import reactLogo from './images/react_logo.png'

// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './math.js'

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from './math.js'

import * as everything from './math.js'
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)
// JSX element, header


// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  title: 'Senior Developer',
  country: 'Finland',
  skills: ['HTML', 'CSS', 'Python', 'JavaScript'],
  startDate: 'August 30, 2020'
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const skillsFormatted = author.skills.map(skill => <p key={skill}>{skill}</p>)
const joined = `Joined on ${author.startDate}`

const user = (
  <div className='user-wrapper'>
    <img className="user-img" src={asabenehImage} alt='asabeneh image' />
      <h3>{`${author.firstName} ${author.lastName}`}</h3>
      <p>{`${author.title}, ${author.country}`}</p>
      <h3>Skills</h3>
      <div className="user-skills">
        {skillsFormatted}
      </div>
      <p>
        {joined}
      </p>
  </div>
)

const technologies = [cssLogo, reactLogo, htmlLogo]
const techImages = technologies.map(img => (<img key={img} src={img} alt={`${img} logo`} className="tech-img"/>))

const tech = (
  <div className='tech-container'>
    <h2 className='tech-title'>Front End Technologies</h2>
      <div className='tech-wrapper'>
        <div className="tech-flex">
          {techImages}
        </div>
    </div>
  </div>
)

const subHeader = 'Subscribe'
const subBody = 'Sign Up with Your Email to Recieve News and Updates'

const subscribe = (
  <div className='subscribe-container'>
    <div className='subscribe-wrapper'>
      <h1 className='subscribe-title'>{subHeader.toUpperCase()}</h1>
      <p>{subBody}</p>
      <form className="subscribe-form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Email"/>
      </form>
      <button type="submit" value="Submit" className="subscribe-btn">{subHeader}</button>
    </div>
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      {result}
      {personAge}
      {tech}
      {subscribe}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
