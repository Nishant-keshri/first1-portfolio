import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
    const form = useRef();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const res = await axios.get('http://localhost:5000/messages');
            setMessages(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const checkbox = document.getElementById("termsCheckbox");
        const error = document.getElementById("error");

        if (!checkbox.checked) {
            error.classList.remove("hidden");
            return;
        } else {
            error.classList.add("hidden");
        }

        const formData = {
            firstName: form.current["user_name"].value,
            lastName: form.current["lastName"].value,
            email: form.current["user_email"].value,
            phone: form.current["phone"].value,
            topic: form.current["topic"].value,
            message: form.current["message"].value,
        };

        try {
            await axios.post('http://localhost:5000/messages', formData);
            alert('Message sent successfully!');
            form.current.reset();
            fetchMessages(); // Refresh the message list
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send. Please try again later.');
        }
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} id='contact'>
                <div className='contact'>
                    <div className="contactme">Drop a Line</div>
                    <div className="otherinfo">"Let’s connect and create something amazing together."</div>
                    <div className="flname">
                        <div className="firstname">
                            <label htmlFor="firstName" className='fnin'>First Name</label>
                            <input type="text" name="user_name" className='inputtext' placeholder="First Name" required />
                        </div>
                        <div className="firstname">
                            <label htmlFor="lastName" className='fnin'>Last Name</label>
                            <input type="text" name="lastName" id="lastName" className='inputtext' required />
                        </div>
                    </div>
                    <div className="flname">
                        <div className="firstname">
                            <label htmlFor="email" className='fnin'>Email</label>
                            <input type="email" name="user_email" className='inputtext' placeholder="Email" required />
                        </div>
                        <div className="firstname">
                            <label htmlFor="phone" className='fnin'>Phone Number</label>
                            <input type="text" name="phone" id="phone" className='inputtext' required />
                        </div>
                    </div>

                    <label htmlFor="topic" className='for'>Choose a topic</label>
                    <select id="topic" name="topic" className='forit' defaultValue="" required>
                        <option value="" disabled>Select one...</option>
                        <option value="feedback">Feedback</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="other">Other</option>
                    </select>
                    <div className="message">
                        <label htmlFor="message" className='enter'>Message</label>
                        <input type="text" name="message" className='enterfor' placeholder="Enter your message..." required />
                    </div>
                    <div className='allcheckbox'>
                        <div className="checkbox-container">
                            <input type="checkbox" id="termsCheckbox" />
                            <label htmlFor="termsCheckbox" className='checklabel'>
                                I accept the <a href="#">Terms</a>
                            </label>
                        </div>
                        <span id="error" className="error-message hidden text-red-600 text-sm">Please accept the terms and conditions.</span>

                        <br />
                        <br />
                        <button type="submit" className="submit bg-purple-600 text-white px-4 py-2 rounded">Submit</button>
                    </div>
                </div>
            </form>

            {/* Display all messages below */}
            <div className="messages-list mt-10 p-4" id='testimonials'>
                <h2 className="messages-from-users text-2xl font-bold mb-4">Reviews of Visitors</h2>
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div key={index} className="username message-card bg-gray-100 p-4 rounded-lg mb-4 shadow">
                            <h4 className="font-semibold username">{msg.firstName} {msg.lastName}</h4>
                            <p className="review text-gray-700">{msg.message}</p>
                            <small className="text-gray-500">{new Date(msg.createdAt).toLocaleString()}</small>
                        </div>
                    ))
                ) : (
                    <p>No messages yet!</p>
                )}
            </div>
        </>
    );
};

export default Contact;
