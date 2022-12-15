import Movie_catalog from '../../models/Movies_catalog'
import User from '../../models/User'
import createToken from '../../utils'
import bcrypt from 'bcryptjs';

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
        if (!password || !email) {
            return{
              response: 'invalid credentials',
              status: false
            }
          }
          try {
            // Busca el usuario unico en la BD busco correo electronico
            const user = await User.findOne({
              email: email,
            });
            // Validamos si el usuario exite
            if (!user) {
              return{
                response: 'invalid credentials',
                status: false
              }
            }
        
            // compara el password enviado con el de la base de datos
            const isValid = await bcrypt.compare(password, user.password);
        
            // Compara si es valido el password
            if (!isValid) {
              return{
                response: 'invalid credentials',
                status: false
              }
            }
        
            const payload = {
              userId: user.id,
              email: user.email
            };
            // este es el Token @.
            const token = createToken(payload);
            return {
              response: token,
              status: true
            }
          }catch(error) {
            return 'Error la hacer login'
          }
    }

}
export default Query