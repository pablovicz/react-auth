import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/auth';


interface PrivateRouteProps {
    element: ReactNode;
}


export function ProtectedRoute({ element }: PrivateRouteProps) {

    const { authenticated } = useContext(AuthContext);

    if (authenticated) {
        return (
            <>{element}</>
        );
    }
    
    return (
        <Navigate to="/login" />
    );
}