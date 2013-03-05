GDI Core Introduction to Web Concepts
======================

This is the official Girl Develop It Core Intro Web Concepts course. Material was originally developed by Matt Torbin and Elise Wei.

The course is meant to be taught in a single two-hour workshop. 

## Suggested course description is below:

*Not sure how the Internet works?*

*Want to build a cool website, but can’t decide what language to use?*

*Tired of techies throwing around acronyms that make your head spin?*

In this class, we will walk through the fundamentals of web development in layman terms. While we won't be writing code, we'll take you through various components of the web and how they work together. If you want to learn how to communicate better with your technical team or friends, this course is for you. Topics include but are not limited to:

*   What is the World Wide Web?
*   Where are web site files generally stored?
*   What is the difference between a client and a server?
*   Which programming languages are compiled on a server and which are compiled in a web browser?
*   What do you need to know before building a web site?
*   What language should you use and what are the differences?
*   What tools do you need to develop a web site?
*   Who does what on a typical web development team?
*   What is Web 2.0 and the Cloud?

This class is for people with little to no technical experience.

## Theme customization

You can change theme colors by changing the theme css to any of the following options:
```html
  <link rel="stylesheet" href="css/theme/gdidefault.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdilight.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdisunny.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdicool.css" id="theme">
```
You can change the text editor theme by changing the highlight.js css to the following options:
```html
  <link rel="stylesheet" href="lib/css/dark.css">
  <link rel="stylesheet" href="lib/css/light.css">
```
You can change transition by changing the reveal transition property in Reveal.initialize
```javascript
  Reveal.initialize({
  				transition:  'default', // default/cube/page/concave/zoom/linear/none
  			});