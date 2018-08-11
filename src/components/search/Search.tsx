import * as React from 'react';
import MovieService from '../../services/theMovieDB.service'

export default class Search extends React.Component<any, ISearchState> {
    private movieService: MovieService;

    constructor(props: any) {
        super(props);
        this.state = {
            movies: {},
            value: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.movieService = new MovieService();;
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter a movie" value={this.state.value} />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }

    private handleSubmit(event: React.MouseEvent<HTMLFormElement>): void {
        event.preventDefault();

        const movies = this.movieService.getMovies(this.state.value);

        this.setState({ movies })

        console.log(this.state.movies)
    }
}

interface ISearchState {
    value: string;
    movies: any;
}
