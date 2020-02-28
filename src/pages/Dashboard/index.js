import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {updateName} from "../../store/actions/name";

function Dashboard(props) {
    const {name, dispatch} = props;

    function handleChange(event) {
        dispatch(updateName(event.target.value));
    }
    return (
        <div>
            <h1>Dashboard Page</h1>
            <div>Nama Kamu : {name}</div>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nama"
                label="Nama"
                name="nama"
                autoComplete="Nama"
                autoFocus
                onChange={handleChange}
            />
        </div>
    );
}

Dashboard.propTypes = {
    name: PropTypes.string
};

const mapStateToProps = state => ({
    name: state.name
});

export default connect(mapStateToProps)(Dashboard);