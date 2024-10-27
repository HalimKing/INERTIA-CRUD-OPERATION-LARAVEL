import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import React from 'react';

const CreateForm = ({ user }) => {
  
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function submit(e) {
    e.preventDefault();
    post(route('users.store'), {
      onError: (errors) => {
        console.log(errors);
      }
    });
  }

  return (
    <AuthenticatedLayout user={user}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">User Management</h2>}
    >
      <Head title="Edit Form" />

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold">Create User</h1>
        </div>

        <form onSubmit={submit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <TextInput
              name='name'
              onChange={handleChange}
              className='w-full'
              placeholder='Name'
              value={data.name}
            />
            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
          </div>
          
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <TextInput
              name='email'
              onChange={handleChange}
              className='w-full'
              placeholder='Email'
              value={data.email}
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <TextInput
              name='password'
              onChange={handleChange}
              type='password'
              className='w-full'
              value={data.password}
              placeholder='Password'
            />
            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              disabled={processing}
            >
              {processing ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}

export default CreateForm;
