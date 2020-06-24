import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {connect} from "react-redux";
import {authenticationThunk} from "../redux/authentication/authentication";


class Auth extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
        const name = e.currentTarget.name;
        this.setState({
            [name]: e.currentTarget.value
        });
    };

    handleRegister = () => {
        this.props.authenticationThunk(
            this.state.email,
            this.state.password
        )
    };

    render() {
        return (
            <Card variant="outlined">
                <CardContent>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        autoComplete="current-password"
                        variant="outlined"
                        value={this.state.email}
                        name={'email'}
                        onChange={this.handleChange}
                    />
                </CardContent>
                <CardContent>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        value={this.state.password}
                        name={'password'}
                        onChange={this.handleChange}
                    />
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={this.handleRegister}>
                        Отправить
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.authentication.token
    }
};


export default connect(mapStateToProps, {authenticationThunk})(Auth);