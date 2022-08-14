import Switch from 'react-switch';
import { useTheme } from '../../hooks/Theme';

export function ButtonTheme() {

    const { toggleTheme, title } = useTheme();

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