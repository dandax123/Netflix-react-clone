import React from 'react';
import {Title, Picture, Name, Item, List, Container} from './styles/profile'
export default function Profiles({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function profilesTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = function profilesList({children, ...restProps}){
    return <List {...restProps}>{children}</List>
    
}
Profiles.User = function profilesUser({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>
}
Profiles.Picture = function profilesPicture({src, ...restProps}){
    return <Picture {...restProps} src={src ?  `/images/users/${src}.png` : `/images/misc/loading.gif` }></Picture>
}
Profiles.Name = function profilesName({children, ...restProps}){
    return <Name {...restProps}>{children}</Name>
}