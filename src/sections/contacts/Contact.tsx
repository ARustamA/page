import { useState, useRef, ChangeEventHandler, FormEventHandler } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { imgAnimation, nameAnimation } from './variants';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_4p56i3b',
        'template_7bj2ank',
        {
          form_name: form.name,
          to_name: 'Rustam',
          from_email: form.email,
          to_email: 'rakhmetyanov@gmail.com',
          message: form.message
        },
        'VV5HMExvHU4vdzSiP'
      )
      .then(
        () => {
          setLoading(false);
          alert('Спасибо тебе. Я отвечу вам как можно скорее.');

          setForm({
            name: '',
            email: '',
            message: ''
          });
        },
        (error: Error) => {
          setLoading(false);

          console.log(error);
          alert('Что-то пошло не так');
        }
      );
  };

  const inputStyle = `bg-slate-800 py-4 px-6 placeholder:text-secondary text-white 
  rounded-lg outline-none border-none font-medium opacity-80 shadow-blue2 shadow-inner`;

  return (
    <div
      className={` flex xl:flex-row flex-col-reverse gap-5 overflow-hidden w-full max-w-5xl mx-auto`}>
      <motion.div className="flex-[0.75] max-w-xl p-4 lg:p-8 rounded-2xl">
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" flex flex-col gap-3 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}>
          <motion.label className="flex flex-col" custom={1} variants={nameAnimation}>
            <span className="text-white font-medium mb-4 ">Ваше имя</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Как к Вам обращаться?"
              className={inputStyle}
            />
          </motion.label>
          <motion.label className="flex flex-col" custom={2} variants={nameAnimation}>
            <span className="text-white font-medium mb-4">Почта</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Куда направить ответ?"
              className={inputStyle}
            />
          </motion.label>
          <motion.label className="flex flex-col" custom={3} variants={nameAnimation}>
            <span className="text-white font-medium mb-4">Ваше сообщение</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Место для сообщения"
              className={inputStyle}
            />
          </motion.label>

          <motion.button
            custom={3}
            variants={imgAnimation}
            type="submit"
            className="bg-blue2  outline-none w-fit text-white font-bold bg-opacity-80 shadow-inner
            p-4 h-min text-sm border  hover:rounded-se-3xl hover:rounded-es-3xl hover:scale-110 transition-all delay-200 whitespace-nowrap">
            {loading ? 'Отправка...' : 'Отправить'}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export { Contact };
