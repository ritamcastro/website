import React from "react"
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom"
import Header from "./ui/molecules/header/header"
import Footer from "./ui/molecules/footer/footer"
import Home from "./ui/pages/home/home"
import WorkInProgress from "./ui/pages/work-in-progress/wip"
import "./ritamcastro.scss"

const RitaMCastro = () => {

    return <BrowserRouter>

        <Header />

        <main>
            <Switch>
                <Route path="/about" render={() => <WorkInProgress />} />
                <Route path="/blog" render={() => <WorkInProgress />} />
                <Route path="/" render={() => <Home />} />
                <Redirect exact from={"/"} to={"/home"} />
            </Switch>
        </main>

        <Footer />

    </BrowserRouter>
}

export default RitaMCastro
