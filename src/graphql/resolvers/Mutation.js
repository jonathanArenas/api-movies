import Movie_catalog from "../../models/Movies_catalog";
import User from "../../models/User";
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
    async createUser(_,{input}){
        const user = await User.create(input)
        return user
    }

}
export default Mutation