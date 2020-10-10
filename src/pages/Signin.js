import React, {useState, useContext} from 'react';
import {FirebaseContext} from '../context/firebase'
import { HeaderContainer} from '../containers/header';

import {useHistory} from 'react-router-dom';
import { FooterContainer} from '../containers/footer';
import {Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function SignIn(){
    const history = useHistory();
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState(' ')
    const [error, setError] = useState('')
    const isInvalid = password === '' || emailAddress === '';
    const {firebase} = useContext(FirebaseContext);
    const handleSignIn = (event)=>{
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(()=>{
                history.push(ROUTES.BROWSE);
            })
            .catch((error)=>{
                setEmailAddress('')
                setPassword('')
                setError(error.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit = {handleSignIn} method="POST">
                        <Form.Input placeholder="Email address" value={emailAddress} onChange={({target})=>setEmailAddress(target.value)}/>
                        <Form.Input autoComplete="off" placeholder="Password" type="password" value={password} onChange={({target})=>setPassword(target.value)}/>
                        <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link></Form.Text>
                    <Form.TextSmall>
                        This page is protected by Goocle reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}