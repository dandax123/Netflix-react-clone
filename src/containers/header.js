import React from 'react';
import {Header} from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg';
export  function HeaderContainer({children}){
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo}/>
                <Header.ButtonLink to={ROUTES.SIGNIN}>Sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}