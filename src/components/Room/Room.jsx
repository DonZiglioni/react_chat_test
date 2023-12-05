import React, { useState, useEffect } from 'react'
import { databases, DATABASE_ID, COLLECTION_ID_MESSAGES } from '../../appwriteConfig'
import { ID } from 'appwrite'
import { useAuth } from '../../auth/authContext'

const Room = () => {
    const { user, handleUserLogout } = useAuth();
    const [messages, setMessages] = useState([]);
    const [messageBody, setMessageBody] = useState('')

    useEffect(() => {
        getMessages()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let payload = {
            user_id: user.name,
            body: messageBody,
        }
        let permissions = []; // ADD PERMISSIONS IN PAYLOAD
        let res = await databases.createDocument(DATABASE_ID, COLLECTION_ID_MESSAGES, ID.unique(), payload);
        // console.log("Sent!", res);
        setMessages(prev => [...messages, res])
        setMessageBody('')
    }

    const handleChange = (e) => {
        setMessageBody(e.target.value);
    }

    const getMessages = async () => {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_MESSAGES)
        //console.log(res.documents);
        setMessages(res.documents);
    }
    return (
        <div className='chat-room'>
            <h1>Chat Room</h1>
            <button onClick={handleUserLogout}>LOGOUT</button>
            {user ? <h2> Welcome! {user.name}</h2> : "GTFOH"}
            {
                messages.map((item) => (
                    <div key={item.$id}>
                        <h3>{item.user_id ? item.user_id : "Don Z"}</h3>
                        <p>{item.body}</p>
                    </div>
                ))
            }
            <form className='chat-form' onSubmit={handleSubmit}>
                <textarea
                    required
                    maxLength={250}
                    placeholder='Enter message...'
                    onChange={handleChange}
                    value={messageBody}
                ></textarea>
                <button type='submit'>Send</button>
            </form>

        </div>
    )
}

export default Room