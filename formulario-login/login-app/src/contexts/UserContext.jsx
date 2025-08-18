import { createContext, useState } from "react"

const UserContext = createContext()

function UserProvider({ children }){
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [userList, setUserList] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com',
            password: '123456'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@gmail.com',
            password: 'abcdef'
        }
    ])

    const addUser = (newUser) => {
        setUserList([...userList, newUser])
    }

    return(
        <UserContext.Provider value={{ userData, setUserData, userList, addUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }