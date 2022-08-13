import Switch from 'react-switch';
import { useContext, useEffect, useState } from 'react';

import { ThemeContext } from 'styled-components';

import { setCookie } from 'nookies';

import { toggleThemeType } from '../../../pages'; 

export function ButtonTheme({ toggleTheme, title }: toggleThemeType) {

    return (
        <>
            <Switch 
            onChange={() => toggleTheme()}
            checked={title === 'dark' && true}
            checkedIcon={false}
            uncheckedIcon={false}
            height={13}
            width={40}
            handleDiameter={20}
            onColor={'#555'}
            offColor={'#dfdbdb'}
            offHandleColor={'#555'}
            onHandleColor={'#dfdbdb'}
            activeBoxShadow={undefined}
            />
        </>
    ) 
}