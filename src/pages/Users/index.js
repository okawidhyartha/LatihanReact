import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import { getUsersAction } from "../../store/actions/users";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Typography from "@material-ui/core/Typography";
import TableHead from "@material-ui/core/TableHead";

import { connect } from "react-redux";

const styles = theme => ({
    root: {
        width: "100%"
    },
    table: {
        minWidth: 500
    },
    tableWrapper: {
        overflowX: "auto"
    }
});

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLegt: theme.spacing(2.5)
    }
});

function Pagination(props) {
    const { classes, count, page, rowsPerPage, theme, onChangePage } = props;

    function handleFirstPageButtonClick(event) {
        onChangePage(event, 0);
    }
    function handlePrev(event) {
        onChangePage(event, page - 1);
    }
    function handleNext(event) {
        onChangePage(event, page + 1);
    }
    function handleLastPage(event) {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
        <div className={classes.root}>
            <IconButton aria-label="First Page" onClick={handleFirstPageButtonClick}>
                {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}{" "}
            </IconButton>
            <IconButton onClick={handleNext}>
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton onClick={handleLastPage}>
                {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

const TablePaginationWrapped = withStyles(actionsStyles, {
    withTheme: true
})(Pagination);

function Users(props) {
    const [listData, setListData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { posts, dispatch, users } = props;

    function handleChangePage(event, page) {
        setPage(page);
    }

    const renderRow = data => {
        const temp = data.length>0 && data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(d => (
            <TableRow key={d.id}>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.username}</TableCell>
                <TableCell>{d.email}</TableCell>
            </TableRow>
        ));
        return temp;
    };
    const { classes } = props;

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(event.target.value);
    }

    console.log("twst",props);

    // https://codepen.io/bhagasan/pen/MWwoGrX
    return (
        <Paper className={classes.root}>
            <Typography>List user</Typography>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{renderRow(users)}</TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            colSpan={3}
                            count={users.length || 0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationWrapped}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </Paper>
    );
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps, null)(withStyles(styles)(Users));
