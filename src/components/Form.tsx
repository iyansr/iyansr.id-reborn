import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import React, { useState } from 'react'

interface FormInput {
   name: string;
   subject: string;
   reply_to: string;
   message: string;
}

const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Form = () => {
   const { register, handleSubmit, errors, reset } = useForm<FormInput>()
   const [submitting, setSubmitting] = useState<boolean>(false)
   const [succes, setSucces] = useState<boolean>(false)
   const [failure, setFailure] = useState<boolean>(false)

   const onSubmit = (data: FormInput) => {
      if (!submitting) {
         setSubmitting(true)
      }
      emailjs
         .send(`${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`, data, `${process.env.NEXT_PUBLIC_EMAIL_USER_ID}`)
         .then((response) => {
            if (response.status === 200) {
               setSucces(true)
               setTimeout(() => {
                  setSucces(false)
               }, 3000)
               reset()
               setSubmitting(false)
            }
         })
         .catch((error) => {
            setFailure(true)
            setSubmitting(false)
            setTimeout(() => {
               setFailure(false)
            }, 3000)
         })
   }

   return (
      <form className='lg:w-1/2 md:w-2/3 w-full bg-secondary p-6 mx-auto rounded-md text-sm' onSubmit={handleSubmit(onSubmit)}>
         <div className='flex flex-col'>
            <label htmlFor='name' className='font-semibold'>
               Name <span className='text-xs text-red-600'>*</span>
            </label>
            <input
               ref={register({ required: true })}
               type='text'
               name='name'
               id='name'
               placeholder='Please enter your name'
               className='px-4 py-2 rounded-md bg-primary placeholder-gray-700 mt-2 text-gray-500'
            />
            {errors.name && <p className='text-red-500 text-xs mt-1 ml-1'>Name field is required</p>}
         </div>

         <div className='flex flex-col mt-4'>
            <label htmlFor='reply_to' className='font-semibold'>
               Email <span className='text-xs text-red-600'>*</span>
            </label>
            <input
               ref={register({
                  required: true,
                  pattern: {
                     value: pattern,
                     message: 'Email is wrong',
                  },
               })}
               type='text'
               name='reply_to'
               id='reply_to'
               placeholder='Please enter your email'
               className='px-4 py-2 rounded-md bg-primary placeholder-gray-700 mt-2 text-gray-500'
            />
            {errors.reply_to && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.reply_to.message ? errors.reply_to.message : 'Email is required'}</p>}
         </div>
         <div className='flex flex-col mt-4'>
            <label htmlFor='subject' className='font-semibold'>
               Subject <span className='text-xs text-red-600'>*</span>
            </label>
            <input
               ref={register({ required: true })}
               type='text'
               name='subject'
               id='subject'
               placeholder='Please enter subject'
               className='px-4 py-2 rounded-md bg-primary placeholder-gray-700 mt-2 text-gray-500'
            />
            {errors.subject && <p className='text-red-500 text-xs mt-1 ml-1'>Subject field is required</p>}
         </div>
         <div className='flex flex-col mt-4'>
            <label htmlFor='message' className='font-semibold'>
               Message <span className='text-xs text-red-600'>*</span>
            </label>
            <textarea
               rows={5}
               ref={register({ required: true })}
               name='message'
               id='message'
               placeholder='Please enter your message'
               className='px-4 py-2 rounded-md bg-primary placeholder-gray-700 mt-2 text-gray-500'
            />
            {errors.message && <p className='text-red-500 text-xs mt-1 ml-1'>Message field is required</p>}
         </div>

         {succes && (
            <div className='px-4 py-2 bg-green-500 rounded-md text-white mt-4'>
               <p>
                  <span className='font-bold'>🚀 Success!</span> I will reply your message as soon as possible
					</p>
            </div>
         )}
         {failure && (
            <div className='px-4 py-2 bg-green-500 rounded-md text-white mt-4'>
               <p>
                  <span className='font-bold'>😯 Error!</span> Sorry for that, please try again later.
					</p>
            </div>
         )}

         {submitting ? (
            <input type='submit' value='Submit' disabled className='opacity-50 mt-4 px-4 py-2 bg-purple-700 rounded-md font-bold cursor-pointer' />
         ) : (
               <input type='submit' value='Submit' className='mt-4 px-4 py-2 bg-purple-700 rounded-md font-bold cursor-pointer' />
            )}
      </form>
   )
}

export default Form
