import React, { useRef, useState } from 'react'



const Contact = () => {
  const [form, setForm] = useState({name:"", email:"", message:""})
  const [isLoading, setLoading] = useState(false)
  const formRef = useRef(null)


  const handleChange = ({target:{name, value}}) => {
    setForm({ ...form, [name]: value });
  };
  const handleFocus = () => {}
  const handleBlur = () => {}
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div>
        <h1 className='flex-1 min-w-[50%] flex flex-col'> Get in Touch with me </h1>
        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              value = {form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='john@gmail.com'
              value = {form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder='Hello! I am glad to chat with you!!'
              required
              value = {form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact