## Objective:
Build a simple web application for browsing music albums.

### Subsonic API documentation: http://www.subsonic.org/pages/api.jsp

### Requirements:
1. Use the Subsonic API to query for the 10 most recently added albums.
2. Display the album covers for the loaded albums in a horizontal scrolling gallery.
    - The gallery must have left and right buttons to select an album.
    - The currently selected album must be in the center of the view.
    - Scrolling past the left or right end of the list should wrap around to the other end.
    - The scrolling should animate smoothly.
3. Display the title and track list for the currently selected album.

### Currently implemented:
1. Get 10 most recently added albums from Subsonic API and view albums in carousel
2. Displaying detailed information about the album by clicking on the icon in the carousel.
3. Scrolling the album carousel past the left or right end of the list leads to the other end. (cycle scroll)
4. Album gallery have left and right buttons to scroll.

## Technology stack:
- React
- React router dom
- Tanstack query
- Subsonic API

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


