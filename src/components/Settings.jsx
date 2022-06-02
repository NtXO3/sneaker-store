import React, { useEffect, useState } from 'react';
import { UserAuth } from '../AuthContext';
import { getAuth, updateProfile, updatePassword, reauthenticateWithCredential, EmailAuthProvider, deleteUser } from 'firebase/auth';
import { auth } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const { user } = UserAuth()
    const [nameInputOpen, setNameInputOpen] = useState(false)
    const [userName, setUserName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [editPasswordOpen, setEditPasswordOpen] = useState(false)
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    let navigate = useNavigate()

    useEffect(() => {
        setUserName(user?.displayName)
    }, [user])

    const updateUserName = async () => {
        setIsLoading(true)
        await updateProfile(auth.currentUser, {
            displayName: userName
        })
        setNameInputOpen(false)
        setIsLoading(false)
    }

    const deleteAccount = async () => {
        try {
            setIsLoading(true)
            await deleteUser(user)
            navigate('/')
        } 
        catch (error) {
            console.error(error)
        }
        setIsLoading(false)
    }

    const updatePassword = async () => {
        setIsLoading(true)
        const credential = EmailAuthProvider.credential(
            user?.email,
            currentPassword
        )
        try {
            await reauthenticateWithCredential(user, credential)
            await updatePassword(user, newPassword)
            setIsLoading(false)
        } catch (err) {
            console.error(err)
            setIsLoading(false)
        }
        
    }

    return (
        <div className="account__settings">
            <h1 className="account__title">Account Settings</h1>
            <div className="account__divider"></div>
            <h2 className="account__info--title">Email</h2>
            <div className="account__field">
                <p className="account__info--value">{user?.email}</p>
            </div>
            <div className="account__input--wrapper">
                <h2 className="account__info--title">Name</h2>
                {
                    nameInputOpen ?                   
                    <div className="account__field">
                        <input type="text" className="account__input" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <div className="account__buttons--wrapper">
                            <button className="account__edit" onClick={() => {
                                setNameInputOpen(false)
                                setUserName(user?.displayName)
                            }}>Cancel</button>
                            <button className="account__edit account__edit--primary" onClick={updateUserName}>{isLoading ? <FontAwesomeIcon className='fa-spinner-account' icon={faSpinner} /> : 'Save'}</button>
                        </div>
                    </div>                    
                    :
                    <div className="account__field">
                        <p className="account__info--value">{userName ? userName: 'Not specified'}</p>
                        <button className="account__edit" onClick={() => setNameInputOpen(true)}>Edit</button>
                    </div>
                }
            
            </div>
            <div className="account__input--wrapper">
                <h2 className="account__info--title">Password</h2>
                <div className="account__field">
                    {
                        editPasswordOpen ?
                        <>
                        <div className='account__field--password'>  
                            <p className="account__info--value">Old Password</p>
                            <input className="account__input" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}/>
                            <p className="account__info--value">New Password</p>
                            <input className="account__input" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                        </div>
                        <div className="account__buttons--wrapper">
                            <button className="account__edit" onClick={() => {
                                setEditPasswordOpen(false)
                                setCurrentPassword('')
                                setNewPassword('')
                            }}>Cancel</button>
                            <button className="account__edit account__edit--primary" onClick={updatePassword}>{isLoading ? <FontAwesomeIcon className='fa-spinner-account' icon={faSpinner} /> : 'Save'}</button>
                        </div>
                        </>
                        :
                        <>                       
                            <p className="account__info--value">Edit your password here</p>
                            <button className="account__edit" onClick={() => alert('This feature has not yet been implemented')}>Edit</button>
                        </>
                    }
                    
                </div>           
            </div>
            <button className="btn account__btn" onClick={deleteAccount}>{isLoading ? <FontAwesomeIcon className='fa-spinner-account' icon={faSpinner} /> : 'Delete Account'}</button>
        </div>
    );
}

export default Settings;
