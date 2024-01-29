import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/routes'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(userActions.initAuthData())
    },[dispatch]);

    useEffect(()=>{
        document.body.className = theme;
    },[theme]);
    
    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <Navbar />               
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
