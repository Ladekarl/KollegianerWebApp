import { Card, CardHeader, Button, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap"
import React, { ChangeEvent, KeyboardEvent, FC, useState } from "react"
import { Translate, I18n } from "react-redux-i18n"
import { RootState, LoginModel } from "GlobalTypes";
import { loginFacebookAsync, loginUserAsync } from "../loginActions";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
    isLoading: state.login.isLoading,
    user: state.login.user
});

const dispatchProps = {
    loginFacebook: () =>
        loginFacebookAsync.request(),
    loginUser: (login: LoginModel) =>
        loginUserAsync.request({
            ...login,
        })
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps

const LoginCard: FC<Props> = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const onLoginFacebookPressed = () => {
        props.loginFacebook();
    }

    const onLoginPressed = () => {
        props.loginUser({
            username: email,
            password
        });
    }

    const onKeyPressLogin = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.keyCode === 13 &&
            email &&
            email !== '' &&
            password &&
            password !== '') {
            onLoginPressed();
        }
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setPassword(password);
    }

    return (
        <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                    <small><Translate value="login.loginWith" /></small>
                </div>
                <div className="btn-wrapper text-center">
                    <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        disabled={props.isLoading}
                        onClick={onLoginFacebookPressed}>
                        <span className="btn-inner--icon mr-1">
                            <i className="fa fa-facebook-square" />
                        </span>
                        <span className="btn-inner--text"><Translate value="login.facebook" /></span>
                    </Button>
                </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                    <small><Translate value="login.useLoginInfo" /></small>
                </div>
                <Form role="form">
                    <FormGroup className="mb-3" onKeyPress={onKeyPressLogin}>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-email-83" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder={I18n.t('login.email')}
                                type="email"
                                onChange={onChangeEmail}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder={I18n.t('login.password')}
                                type="password"
                                autoComplete="off"
                                onChange={onChangePassword}
                            />
                        </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                        <Button
                            className="my-4"
                            color="primary"
                            disabled={props.isLoading}
                            onClick={onLoginPressed}
                            type="button">
                            <Translate value="login.login" />
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    )
}

export default connect(mapStateToProps, dispatchProps)(LoginCard);