import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"

//Hook Personalizado!
// function useUsers() {
//     const [user, setUser] = useState(null);

//     function login() {
//         fetch("https://jsonplaceholder.typicode.com/users/1")
//             .then(response => response.json()) 
//             .then(json => setUser(json))
//     }

//     return {
//         user, login 
//     }

// }

// export default useUsers

//Hook como Contexto
function useUsers() {
    const user = useContext(UserContext);
    console.log(user);
    return user;
}

export default useUsers;
 