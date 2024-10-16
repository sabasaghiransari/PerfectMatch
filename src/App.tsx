import {useEffect, useState} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'

import Loader from './common/Loader'
import PageTitle from './components/PageTitle'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'
import Calendar from './pages/Calendar'
import Chart from './pages/Chart'
import FormElements from './pages/Form/FormElements'
import FormLayout from './pages/Form/FormLayout'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Tables from './pages/Tables'
import Alerts from './pages/UiElements/Alerts'
import Buttons from './pages/UiElements/Buttons'
import DefaultLayout from './layout/DefaultLayout'
import PerfectMatch from "./PerfectMatch";
import ECommerce from "./pages/Dashboard/ECommerce";

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

    return loading ? (
        <Loader/>
    ) : (
        <DefaultLayout>
            <Routes>
                <Route
                    index
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match | Home"/>
                            <PerfectMatch/>
                        </>
                    }
                />
                <Route
                    path="/ecommerce"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match | Dashboard"/>
                            <ECommerce/>
                        </>
                    }
                />
                <Route
                    path="/calendar"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Calendar"/>
                            <Calendar/>
                        </>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Profile"/>
                            <Profile/>
                        </>
                    }
                />
                <Route
                    path="/forms/form-elements"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Form Elements"/>
                            <FormElements/>
                        </>
                    }
                />
                <Route
                    path="/forms/form-layout"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Form Layout"/>
                            <FormLayout/>
                        </>
                    }
                />
                <Route
                    path="/tables"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Tables"/>
                            <Tables/>
                        </>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Settings"/>
                            <Settings/>
                        </>
                    }
                />
                <Route
                    path="/chart"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Basic Chart"/>
                            <Chart/>
                        </>
                    }
                />
                <Route
                    path="/ui/alerts"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Alerts"/>
                            <Alerts/>
                        </>
                    }
                />
                <Route
                    path="/ui/buttons"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Buttons"/>
                            <Buttons/>
                        </>
                    }
                />
                <Route
                    path="/auth/signin"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Signin"/>
                            <SignIn/>
                        </>
                    }
                />
                <Route
                    path="/auth/signup"
                    element={
                        <>
                            <PageTitle title="Domain Leap 2024 Perfect Match Dashboard | Signup"/>
                            <SignUp/>
                        </>
                    }
                />
            </Routes>
        </DefaultLayout>
    );
}

export default App
