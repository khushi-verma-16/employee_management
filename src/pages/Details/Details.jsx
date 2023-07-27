import React from 'react'
import './Details.css'
import Header from '../../components/Header/Header'
import { BiArrowBack } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import Input from '../../components/UI/Input/Input'

const Details = () => {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Header />
      <div className='sub-header'>
        <NavLink to='/' className='back'>
          <BiArrowBack className='back-icon' size={20} title='Back' />
        </NavLink>
        <div className='sub-heading'>
          Add User Data
        </div>
      </div>
      <div className='form'>
        <div className='name-section'>
          <Controller
            name={'firstName'}
            control={control}
            render={({ field: { value, onChange, name } }) => (
              <Input
                label={'First Name'}
                width={'49%'}
                placeholder={'John'}
                value={value}
                onChange={onChange}
                name={name}
                errors={errors}
                required
              />
            )}
            rules={{
              required: { value: true, message: 'first name is required' }
            }}
          />
          <Controller
            name={'lastName'}
            control={control}
            render={({ field: { value, onChange, name } }) => (
              <Input
                label={'Last Name'}
                width={'49%'}
                placeholder={'Wick'}
                value={value}
                onChange={onChange}
                name={name}
                errors={errors}
                required
              />
            )}
            rules={{
              required: { value: true, message: 'last name is required' }
            }}
          />
        </div>
        <Controller
          name={'email'}
          control={control}
          render={({ field: { value, onChange, name } }) => (
            <Input
              label={'Email'}
              placeholder={'abc@xyz.com'}
              value={value}
              onChange={onChange}
              name={name}
              errors={errors}
              required
            />
          )}
          rules={{
            required: { value: true, message: 'email is required'}
          }}
        />
        <div className='name-section'>
          <Controller
            name={'mobile'}
            control={control}
            render={({ field: { value, onChange, name } }) => (
              <Input
                label={'Mobile Number'}
                width={'49%'}
                placeholder={'+91 9988776644'}
                value={value}
                onChange={onChange}
                name={name}
                errors={errors}
                required
              />
            )}
            rules={{
              required: { value: true, message: 'mobile number is required'}
            }}
          />
          <Controller
            name={'designation'}
            control={control}
            render={({ field: { value, onChange, name } }) => (
              <Input
                label={'Designation'}
                width={'49%'}
                placeholder={'eg. software developer...'}
                value={value}
                onChange={onChange}
                name={name}
                errors={errors}
                required
              />
            )}
            rules={{
              required: {value: true, message: 'designation is required'}
            }}
          />
        </div>
        <Controller
          name={'address'}
          control={control}
          render={({ field: { value, onChange, name } }) => (
            <Input
              label={'Address'}
              placeholder={'abc street, st. botanica. USA'}
              value={value}
              onChange={onChange}
              name={name}
              errors={errors}
              required
            />
          )}
          rules={{
            required: {value: true, message: 'address is required'}
          }}
        />
        <button
          className='submit-button'
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default Details