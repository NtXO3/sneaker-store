import React, { useState } from 'react';
import { Popover, Text, Button, Image } from '@mantine/core';
import { UserAuth } from '../AuthContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const NavAccount = () => {
    const [opened, setOpened] = useState(false);
    const { user, logOut} = UserAuth()

    const handleLogOut = async () => {
        await logOut()
    }

    return (
        <>
        <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={
            //<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>
            user?.photoURL ?
            <img src='' alt="" className="nav__user" onClick={() => setOpened((o) => !o)}/>
            :
            <div className='nav__user--blank' onClick={() => setOpened((o) => !o)}>{user?.email[0].toUpperCase()}</div>
        }
        width={180}
        position="bottom"
        withArrow
        spacing={0}
        >
        <div className="popover__menu">
            <Link to='/account' className='menu__link'><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;Account</Link>
            <p className='menu__link' onClick={handleLogOut}><FontAwesomeIcon icon={faArrowRightFromBracket}/>&nbsp;&nbsp;Logout</p>
        </div>
        </Popover>
        </>
    );
}

export default NavAccount;
