import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function Login() {
    let history = useHistory();
    const classes = useStyles();

    const [loading, setLoading] = useState(false);

    const [fakeAccount] = useState({
        username: "apa",
        password: "apa"
    })

    const [formValue, setFormValue] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState({
        username: false,
        password: false
    })

    const [errorText, setErrorText] = useState({
        username: "",
        password: ""
    })

    const [serverMessage, setServerMessage] = useState("");

    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb) {
            fakeAuth.isAuthenticated = true;
            setTimeout(cb, 0);
        },
        signout(cb) {
            fakeAuth.isAuthenticated = false;
            setTimeout(cb, 0);
        }
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        const {username, password} = formValue;
        setServerMessage("");
        setLoading(true);
        if (username === "") {
            setLoading(false);
            setError({username: true})
            console.log(error.username);
            setErrorText({username: "Masukin username woy"});
            console.log(1)
            return;
        } else {
            setLoading(false);
            setErrorText({username: ""});
            console.log(2)
        }
        console.log(error)
        if (password === "") {
            setLoading(false);
            setError({password: true})
            setErrorText({password: "Masukin password woy"});
            return;
        } else {
            setLoading(false);
            setErrorText({password: ""});
        }
        fakeAuth.authenticate(() => {
            setLoading(false);
            if (
                fakeAccount.username === username &&
                fakeAccount.password === password
            ) {
                history.push("/dashboard");
            } else {
                setServerMessage("Username atau password salah cuy")
            }
        })

    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.Avatar}>
                                <LockOutlinedIcon></LockOutlinedIcon>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <div className={classes.paper}>

                                {serverMessage && (
                                    <Alert variant="filled" severity="error">
                                        {serverMessage}
                                    </Alert>
                                )}
                                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                                    <TextField variant="outlined"
                                               margin="normal"
                                               fullWidth
                                               id="username"
                                               label="Username"
                                               name="username"
                                               autoComplete="off"
                                               autoFocus
                                               onChange={handleChange}
                                               error={error.username}
                                               helperText={errorText.username}
                                    ></TextField>
                                    <TextField variant="outlined"
                                               margin="normal"
                                               fullWidth
                                               id="password"
                                               label="Password"
                                               name="password"
                                               autoComplete="off"
                                               autoFocus
                                               onChange={handleChange}
                                               error={error.password}
                                               helperText={errorText.password}
                                    ></TextField>
                                    <Button type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                    >Submit</Button>
                                </form>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <CssBaseline>

            </CssBaseline>
        </Container>
    )

}