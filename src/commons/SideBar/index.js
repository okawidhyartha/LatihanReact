//sidebar
import React from "react";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "../ListItems";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9)
        }
    }
});

function SideBar(props) {
    const { classes, open, close } = props;
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(
                    classes.drawerPaper,
                    !open && classes.drawerPaperClose
                )
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={close}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
        </Drawer>
    );
}

export default withStyles(styles)(SideBar);