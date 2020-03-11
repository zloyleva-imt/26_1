import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import NavBar from "../NavBar";
import Chart from "../Chart";
import {wsSetAction} from '../../store/actions/wsAction'

const App = ({wsSetActionHandler}) => {

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8181');
        ws.onopen = e => console.log(e);
        // ws.onmessage = e => setStock(JSON.parse(e.data));
        wsSetActionHandler(ws)
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <NavBar />
                {/*<Chart stocks={stock} />*/}
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    wsSetActionHandler: ws => dispatch(wsSetAction(ws))
});

export default connect(null,mapDispatchToProps)(App);
