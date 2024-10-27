import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react'
import Success from '../Messages/Success';
// import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap';


// Material UI
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
const Users = ({ users, user, flash }) => {
    const successMessage = flash?.success; // Access the success message here
    
    
    return (
      <AuthenticatedLayout
        user={user} 
        header={<h2 className="text-xl font-semibold leading-tight text-gray-800 content">User Management</h2>}
      >
        <Head title="User Management" />
        <div>
          <Success message={successMessage} />
          
        
            <Button className='float-end' to={'create'} variant="contained" endIcon={<AddIcon />}>
            <Link href={'users/create'}>Create</Link>
            </Button>
          <Table users={users} />
        </div>
      </AuthenticatedLayout>
    );
  };
  
  

export default Users