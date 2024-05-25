import { useModal } from '@/hook/useModal';
import { useState, useRef } from 'react';

// import emailjs from "@emailjs/browser";
// import { styles } from "../styles";

// type IValue = {
//   name: string;
//   email: string;
//   message: string;
// };

const Contact = () => {
  const { isOpen, setClose } = useModal();

  const formRef = useRef(null);
  const [form] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading] = useState(false);

  // const handleChange = (e: { target: { name: string; value: IValue } }) => {
  //   const { name, value } = e.target;

  //   setForm({ ...form, [name]: value });
  // };

  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   setLoading(true);

  // emailjs.send(
  //   'service_upveu6e',
  //   'template_7lbt9fd',
  //   {
  //     from_name: form.name,
  //     to_name: 'Olawale',
  //     from_email: form.email,
  //     to_email: 'waleoxy@gmail.com',
  //     message: form.message,
  //   },
  //   'H0bguVeA0GxgH418g'
  // ).then(() => {
  //   setLoading(false)
  //   alert('Thank your. I will get back to you as soon as possible')
  //   setForm({
  //     name: '',
  //     email: '',
  //     message: '',
  //   })
  // },
  //   (error) => {
  //     setLoading(false)
  //     console.log('error', error);
  //     alert('Something went wrong')
  //   }
  // )
  // };

  return (
    <div
      className={
        !isOpen
          ? 'hidden'
          : 'flex items-start justify-center overflow-hidden flex-col-reverse xl:flex-row backdrop-blur fixed top-0 w-full h-full'
      }
    >
      <div className="relative bg-black-100 px-8 pt-4 pb-0 bg-sky-400/75 rounded-2xl w-[40%] h-[550px] overflow-y-auto mt-24">
        <h3 className="text-clamp4xl text-center text-white mb-2.5">Contact Us.</h3>
        <form ref={formRef} className=" flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-sky-950 font-medium mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Your name"
              className="bg-tertiary py-3 px-4 placeholder:text-sky-700 text-sky-900 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sky-950 font-medium mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Your email"
              className="bg-tertiary py-3 px-4 placeholder:text-sky-700 text-sky-900 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sky-950 font-medium mb-3">Your Message</span>
            <textarea
              rows={3}
              name="message"
              value={form.message}
              placeholder="Type in your message"
              className="bg-tertiary py-3 px-4 placeholder:text-sky-700 text-sky-900 rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-sky-950 font-semibold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        <div className="flex items-center space-x-5">
          <button
            type="submit"
            className="absolute bottom-4 right-8 py-3 px-6 outline-1 bg-muted border-red-300 w-fit text-red-500 font-semibold shadow-md shadow-primary rounded-xl"
            onClick={() => setClose()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
