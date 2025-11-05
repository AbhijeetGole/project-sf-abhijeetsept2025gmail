import { LightningElement } from 'lwc';

export default class MovieList extends LightningElement {
    showList = false;
    selectedMovie = null;

    movies = [
        { id: '1', movieName: 'Inception', releaseYear: '2010', genre: 'Sci-Fi' },
        { id: '2', movieName: 'The Godfather', releaseYear: '1972', genre: 'Crime' },
        { id: '3', movieName: 'Interstellar', releaseYear: '2014', genre: 'Sci-Fi' }
    ];

    handleCheckboxChange(event) {
        this.showList = event.target.checked;
        this.selectedMovie = null;
    }

    handleMovieSelect(event) {
        const movieId = event.target.dataset.id;
        this.selectedMovie = this.movies.find(movie => movie.id === movieId);
    }
}