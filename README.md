# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot
Desktop Design
![Screenshot 2024-05-23 005000](https://github.com/benhyh/advice-generator/assets/155077782/1b4f7e4a-554c-4ddf-a4bf-b587988be965)

Active State
![Screenshot 2024-05-23 005044](https://github.com/benhyh/advice-generator/assets/155077782/4b9faf7a-8125-4cce-bde1-2ad357a84ff0)

### Links

- Solution URL: [To be updated]()
- Live Site URL: [To be updated]()

## My process

### Built with

- HTML5
- SCSS
- Parcel (JavaScript bundler)
- JavaScript API
- Node.js

### What I learned

With Parcel, I was able to quickly implement and use SCSS for the first time. It's truly a remarkable language and the code snippet below is some SCSS functions that I used to build the project:

```SCSS
@media(max-width: 768px) {
    .adviceContainer {
        width: 90vw;
        .svgContainer {
            display: none;
        }
        .svgContainerMobile {
            display: block !important;
        }
    } 
}
```

### Useful resources

- [Learn how to fetch API in 6 minutes](https://www.youtube.com/watch?v=cuEtnrL9-H0) - As this is my first project working with API, without this video,  I wouldn't be able to complete the project!





