import axios from 'axios'

export const fetchUserAction = () =>{
    return (dispatch)=>{

        axios.get('/auth/user')
        .then((user)=>{ 
            dispatch({type:'GET_USER',payload:user.data.name})
        })

    }
}