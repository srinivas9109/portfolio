import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import { Toast } from 'primereact/toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const toast = useRef(null);
  const form = useRef();


  const formSubmit = (e) => {
    e.preventDefault();
    if (name === '' || mail === '' || subject === '') {
      toast.current.show({ severity: 'error', summary: 'Info', detail: 'Please check all the fileds Name,email and Subject' });
    } else {
      emailjs
        .sendForm('service_lhqu9gj', 'template_blx67vv', form.current, {
          publicKey: 'cFo3_-JpfT74nvZ62',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setName('');
            setMail('');
            setSubject('');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }

  };

  return (
    <div
      name="contact"
      className="w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form ref={form}
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            onSubmit={formSubmit}
          >
            <input
              value={name}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={mail}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => setMail(e.target.value)}

            />
            <textarea
              value={subject}
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => setSubject(e.target.value)}

            ></textarea>
            <Toast ref={toast} className='h-auto w-auto' />

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              type="submit">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;