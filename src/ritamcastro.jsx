import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Header from "./ui/molecules/header/header"
import Footer from "./ui/molecules/footer/footer"
import Home from "./ui/pages/home/home"
import WorkInProgress from "./ui/pages/work-in-progress/wip"
import "./ritamcastro.scss"

const RitaMCastro = () => {

    return <HashRouter>

        <Header />

        <main>
            <Switch>
                <Route path="/about" render={() => <WorkInProgress />} />
                <Route path="/blog" render={() => <WorkInProgress />} />
                <Route exact path="/" render={() => <Home />} />
            </Switch>
        </main>

        <Footer />

    </HashRouter>
}

export default RitaMCastro
