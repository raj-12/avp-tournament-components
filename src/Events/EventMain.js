import { HashRouter, Route, Switch } from "react-router-dom";
import EventTable from "./EventTable";
import EventInfo  from "./EventInfo";
import EditEvent from './EditEvent'

const EventMain =()=>{

    return (
    <>
<HashRouter>
    <Switch>
            <Route exact path="/" component={EventTable} />
            <Route exact path="/event" component={EventInfo} />
            <Route exact path="/editevent" component={EditEvent} />
    </Switch>
</HashRouter>

    </>);
}

export default EventMain;



