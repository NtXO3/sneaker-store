import React, { useEffect, useState } from 'react';
import { Modal, PasswordInput } from '@mantine/core';
import { UserAuth } from '../AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { setDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Register = () => {
    const [registerOpen, setRegisterOpen] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const { user, signUp, logIn } = UserAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loadingAuth, setLoadingAuth] = useState(true)

    async function handleSignUp(e) {
        setLoading(true)
        e.preventDefault()
        try {
            await signUp(email, password)
            setLoading(false)
            setDoc(doc(db, 'users', email), {
                savedSneakers: []
            })
        }
        catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    async function handleLogIn(e) {
        setLoading(true)
        e.preventDefault()
        try {
            await logIn(email, password)
            setLoading(false)
        }
        catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    function switchModal() {
        setError('')
        setLoginOpen(!loginOpen)
        setRegisterOpen(!registerOpen)
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        if (error === 'Firebase: Error (auth/user-not-found).') {
            return setErrorMessage('Er bestaat geen gebruiker met dit Email adres. Maak een account aan')
        }
        if (error === 'Firebase: Error (auth/wrong-password).') {
            return setErrorMessage('Onjuist wachtwoord. Probeer opnieuw')
        }
        if (error === 'Firebase: Error (auth/email-already-in-use).') {
            return setErrorMessage('Er is al een account met dit Email adres. Log in')
        }
        else {
            return setErrorMessage('')
        }
    }, [error])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setLoadingAuth(false)
        })
      }, [])

    return (
        <>
            <Modal centered 
                opened={registerOpen}
                onClose={() => {
                    setRegisterOpen(false)
                    setError('')
                    setEmail('')
                    setPassword('')
                }}
                title='Registreren'
                size='460px'
            >
                <div className="auth__modal--wrapper">
                {
                    loading ?
                    <FontAwesomeIcon icon={faSpinner} className='fa-spinner' />
                    :
                    <>
                        <form className="auth__modal--form" onSubmit={handleSignUp}>
                            <input 
                                type="email" 
                                className='auth__modal--input' 
                                placeholder='Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                type="password" 
                                className='auth__modal--input' 
                                placeholder='Password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className='modal__btn auth__modal--btn'>Registreren</button>
                            <p className="modal__error">{errorMessage}</p>
                            <p className="auth__modal--para">Heb je al een account?<span className="modal__cta" onClick={switchModal}>Log In</span> </p>
                            <p className="modal__checkbox"><input type="checkbox"/> Onthoud mij</p>
                        </form>
                    </>
                }
                </div>
            </Modal>

            <Modal centered 
                opened={loginOpen}
                onClose={() => {
                    setLoginOpen(false)
                    setError('')
                    setEmail('')
                    setPassword('')
                }}
                title='Inloggen'
                size='460px'
            >
                <div className="auth__modal--wrapper">
                {
                    loading ?
                    <FontAwesomeIcon icon={faSpinner} className='fa-spinner' />
                    :
                    <>
                        <form className="auth__modal--form" onSubmit={handleLogIn}>
                            <input 
                                type="email" 
                                className='auth__modal--input' 
                                placeholder='Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                type="password" 
                                className='auth__modal--input' 
                                placeholder='Password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className='modal__btn auth__modal--btn'>Inloggen</button>
                            <p className="modal__error">{errorMessage}</p>
                            <p className="auth__modal--para">Heb je nog geen account?<span className="modal__cta" onClick={switchModal}>Registreren</span> </p>
                            <p className="modal__checkbox"><input type="checkbox"/> Onthoud mij</p>
                        </form>
                    </>
                }
                </div>
            </Modal>

            {
                loadingAuth ?
                <>
                <div className="nav__login--skeleton"></div>
                <div className="nav__register--skeleton"></div>
                </>
                :
                <>
                <button className="nav__login" onClick={() => setLoginOpen(true)}>Log In</button>
                <button className='nav__register' onClick={() => setRegisterOpen(true)}>Registreren</button>
                </>
            }

            
        </>
    );
}

export default Register;
