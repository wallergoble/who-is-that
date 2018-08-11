import { SECRETS } from './secrets';

export default class MovieService {
    private authKey = SECRETS.authV3;
    private url: URL;
    private searchParams: URLSearchParams;

    constructor() {
        this.url = new URL('https://api.themoviedb.org/3/');
        this.searchParams = this.url.searchParams;

        this.searchParams.append('api_key', this.authKey);
    }

    public getMovies(searchTerm: string): any {
        fetch(SECRETS.example)
            .then(res => res.json())
            .then(data => data)
            .catch(error => console.error('Error finding movies :(', error));
    }
}
