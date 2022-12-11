import Movie_catalog from '../../models/Movies_catalog'
import User from '../../models/User'
const Query = {
    ping() {
        return 'pong'
    },
    async getMovies() {
        const Movies = await Movie_catalog.find()
        return Movies
    },
    async getMovieById(_, { _id }) {
        const Movie = await Movie_catalog.findById(_id)
        return Movie
    },

    async login(_, { email, password }) {
        const verifyUser = await User.find({ email: email, password: password });
        console.log(verifyUser)
        return verifyUser
    }


}
export default Query