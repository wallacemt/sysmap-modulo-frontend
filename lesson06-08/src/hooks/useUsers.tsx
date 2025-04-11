import { useState } from "react"

function useUsers() {
    const [user, setUser] = useState(null);

    function login() {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json()) 
            .then(json => setUser(json))
    }

    return {
        user, login 
    }

}

export default useUsers