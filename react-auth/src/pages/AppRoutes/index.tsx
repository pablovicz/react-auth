import { ReactNode } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import { AuthProvider } from '../../contexts/auth';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { ProtectedRoute } from './Components/ProtectedRoute';



export const AppRoutes = () => {


    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/' element={<ProtectedRoute element={<HomePage />} />} />
                </Routes>
            </AuthProvider>
        </Router>
    );

}