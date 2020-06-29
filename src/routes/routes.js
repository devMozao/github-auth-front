import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))

const Fallback = () => <h1>Carregando...</h1>

const Routes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Routes
