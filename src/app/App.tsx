import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/routes'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from 'entities/User'

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);
    
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
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}

export default App
