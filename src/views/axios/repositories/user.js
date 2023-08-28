
import axios from 'axios'
const getUserDetail = async () => {
    try{const email = ''
        let response = await axios.get(`https://:3000/api/user/${email}`)
        if(response.status != 200){
            throw 'Failed request'
        }
        if(response.data.results.length > 0){
            let responseUser = response.data.results[0]
            let user = {}
            debugger
            user.dateOfBirth = new Date(responseUser.dob.date)
            user.email = responseUser.email
            user.gender = responseUser.gender ?? 'male'

            user.userId = `${responseUser.id.name}${responseUser.id.value}`

            return user
        }
        debugger
    }catch(error){
        debugger
        throw error
        
    }
}

const login = ({email, password}) => {

}

export default{
    getUserDetail,
     login,
}