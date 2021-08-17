import { HashRouter, Route, Switch } from "react-router-dom"
import Login from "./Login"
import Pages from "./Pages";

const LoginMain =()=>{



    return (
        <div>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/pages" component={Pages} />
      </Switch>
    </HashRouter>
        </div>
    )
}

export default LoginMain;