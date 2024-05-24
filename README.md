# Movie Finder and Rater

## Overview

Movie Finder and Rater is a dynamic and user-friendly React application designed to help users search for movies and view their IMDb ratings. Additionally, it empowers users to add their own ratings for each movie, providing a personalized touch to the movie-watching experience.

## Features

- **Search Movies:** Users can search for movies by title using the search bar. The app fetches movie data from the OMDB API and displays the results in a clean and organized manner.
- **IMDb Ratings:** Each movie in the search results displays its IMDb rating, allowing users to quickly gauge the quality and popularity of the film.
- **User Ratings:** Users can add their own ratings to movies, enhancing the interactivity of the app. These user ratings are stored and displayed alongside the IMDb rating.
- **Movie Details:** Clicking on a movie displays detailed information, including the plot, genre, release date, and cast, giving users comprehensive insights into each movie.
- **Watched List:** Users can maintain a list of movies they have watched, helping them keep track of their viewing history.

## Technologies Used

- **React:** The core framework used to build the user interface.
- **OMDB API:** Fetches movie data, including details and IMDb ratings.
- **State Management:** Utilizes React's `useState` and `useEffect` hooks for managing state and side effects.
- **Local Storage:** Persists user ratings and watched movies list, ensuring data is saved across sessions.
- **CSS:** Provides styling for a clean and intuitive user interface.

## Installation and Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/movie-finder-rater.git
   cd movie-finder-rater
