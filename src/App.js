import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./commons/Navbar";
import SideBar from "./commons/SideBar";
import Dashboard from "./pages/Dashboard";
// import ServiceB from "./components/pages/ServiceB/ServiceB";
import Users from "./pages/Users";
import {getUsers} from "./api/users";
import { getUsersAction } from "./store/actions/users";

// import { getPosts } from "./store/actions/posts";
// import { getUsers } from "./api/users";

// https://codepen.io/besatria/pen/GRJmQqx

const styles = theme => ({
    root: {
        display: "flex"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        height: "100vh",
        overflow: "auto"
    },
    appBarSpacer: theme.mixins.toolbar
});


// useEffect(() => {
//   getUsers().then(res => {
//       console.log("test",res);
//       dispatch(getUsersAction(res));
//   });
// }, [refetch, dispatch]);

function App(props) {
    const { classes, dispatch } = props;

    const [open, setOpen] = useState(true);
    const [refetch, setRefetch] = useState(0);
    const [surveyModusData, setSurveyModusData] = useState({
        labels: [],
        datasets: []
    });

    // useEffect(() => {
    //   getUsers().then(res => {
    //       console.log("testhh",res);
    //       dispatch(getUsersAction(res));
    //   })
    // }, [refetch, dispatch]);

    useEffect(() => {
        getUsers().then(result => dispatch(getUsersAction(result)));
    }, [refetch, dispatch]);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }
    return (
        <Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <Navbar side={open} open={handleDrawerOpen} />
                <SideBar open={open} close={handleDrawerClose} />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Route path="/dashboard/" component={Dashboard} />
                    {/* <Route path="/nested/" component={ServiceB} /> */}
                    <Route path="/list/" component={Users} />
                </main>
            </div>
        </Fragment>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect()(withStyles(styles)(App));
