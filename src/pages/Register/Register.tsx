import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/namespace
import { rules } from 'src/utils/roles'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  console.log(errors)

  return (
    <div className='bg-orange'>
      <div className='max-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-5'>
                <input
                  type='email'
                  className='w-full rounded-sm border border-gray-300 p-2 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                  {...register('email', rules.email)}
                />
                <div className='min-h[1rem].text-sm mt-1 text-red-600'>{errors.email?.message}</div>
              </div>
              <div className='mt-4'>
                <input
                  type='password'
                  className='w-full rounded-sm border border-gray-300 p-2 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                  {...register('password', rules.password)}
                />
                <div className='min-h[1rem].text-sm mt-1 text-red-600'>{errors.password?.message}</div>
              </div>
              <div className='mt-4'>
                <input
                  type='confirm_password'
                  className='w-full rounded-sm border border-gray-300 p-2 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Confirm Password'
                  {...register('confirm_password')}
                />
                <div className='min-h[1rem].text-sm mt-1 text-red-600'>{errors.confirm_password?.message}</div>
              </div>

              <div className='mt-4'>
                <button className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center'>
                  <span className='text-slate-400'>Bạn đã có tài khoản?</span>
                  <Link to='/login' className='ml-2 text-red-400'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
