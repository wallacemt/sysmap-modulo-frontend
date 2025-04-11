import { createContext } from "react"

interface AuthContextProps {
    user: {
        name: string    }
        
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)


function AuthProvider({ children }: any) {
    return (
        <AuthContext.Provider value={{ user: { name: 'Tiago' } }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }

