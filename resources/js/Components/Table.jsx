import { router, useForm } from '@inertiajs/react';
import React from 'react'

const Table = ({users}) => {

  const { data, setData, post, processing, errors, reset } = useForm({
    id: '',
  })
  function deleteUser(userId) {
    router.delete(route('users.destroy', userId),{
      onError: (errors) => {
        console.log(errors);
        
      },
    })
  }
  return (
    
<div className="overflow-x-auto p-10">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Regiostration</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Last Update</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
    {users.map((user) => (
        <tr key={user.id}>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.name}</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.created_at}</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.updated_at}</td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href={`/users/${user.id}/edit`}
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Edit
            </a>
            <a
              // href={`/users/delete/${user.id}`}
              href='javascript:void(0)' onClick={() => deleteUser(user.id)}
              className="inline-block rounded bg-red-600 px-4 ml-2 py-2 text-xs font-medium text-white hover:bg-red-700"
            >
              Delete
            </a>
          </td>
        </tr>
      ))}
      

     
    </tbody>
  </table>
</div>

  )
}

export default Table