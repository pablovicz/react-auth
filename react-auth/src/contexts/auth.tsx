import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
    id: string;
    email: string;
}


export interface AuthContextInterface {
    user: User | null;
    authenticated: boolean;
    login: (user: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

interface AuthProviderProps {
    children: ReactNode;
}


export const AuthProvider = ({ children }: AuthProviderProps) => {


    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(null);


    const login = (email: string, password: string) => {
        console.log('login', { email, password });

        if (password === 'secret' && email === 'teste@email.com') {
            setUser({ id: '123', email: email });
            navigate('/');
        }


    }
    const logout = () => {
        console.log('logout')
        setUser({} as User);
        navigate('/login');
    }


    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}