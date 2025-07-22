import { createContext, useState } from "react"

const UserContext = createContext()

function UserProvider({ children }){
    const [userData, setUserData] = useState({
        name: "",
        email: "",
    })

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }