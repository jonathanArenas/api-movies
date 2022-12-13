import Movie_catalog from "../../models/Movies_catalog";
import User from "../../models/User";
import bcrypt from "bcryptjs"
import createToken from "../../utils";
const Mutation = {
    async createMovie(_, { input }) {
        const Movies = await Movie_catalog.create(input)
        return Movies
    },
    async updateMovie(_, { input, _id }) {
        return await Movie_catalog.findByIdAndUpdate(
            _id,
            input,
            { new: true }
        )
    },
    async removeMovie(_, { id }) {
        await Movie_catalog.findByIdAndRemove(id)
        return await Movie_catalog.find()
    },
    
    async updateLikesMovieById(_,{id}){
        const Movie = await Movie_catalog.findById(id)
        const likes = Movie.likes
        Movie.likes = likes+1;

        const res = await  Movie_catalog.findOneAndUpdate(Movie.title,
            {likes: Movie.likes},{new: true},
            )
        return res
    },

    async createUser(_,{input}){
        const hash = await bcrypt.hash(input.password, 10);
        input.password = hash
        const user = await User.create(input)
        const payload = {
            userId: user.id,
          };
          // este es el Token @.
        const token = createToken(payload);
        return token
    }

}
export default Mutation