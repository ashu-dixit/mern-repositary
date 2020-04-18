import axios from 'axios'

export const fetchUsername = () => {
    return (dispatch) => {

        axios.get('/auth/user')
            .then((user) => {
                dispatch({
                    type: 'GET_USER',
                    payload: user.data,
                    // [{
                    //     name:user.data.name,
                    //     photo: user.data.photo,
                    //     address: user.data.address,
                    //     email: user.data.email
                    // }] ,
                    // photo: user.data.photo,
                    // address: user.data.address,
                    // email: user.data.email
                })

            })

    }
}