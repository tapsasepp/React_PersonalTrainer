import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function CustomerList() {

    const [customers, setCustomers] = React.useState([]);

    // API call for customers
    const fetchCustomers = async () => {
    try {
    const response = await fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers');
    const data = await response.json();
    setCustomers(data._embedded.customers)
    console.log(data);
    }   catch (e) {
    console.error(e);
    }};

    React.useEffect(() => { 
        fetchCustomers();
    }, []);

    const columns = [{
    field: 'firstname', headerName: 'First name', width: 180, editable: true},
    {
    field: 'lastname', headerName: 'Last name', width: 190, editable: true
    },
    {
    field: 'streetaddress', headerName: 'Address', width: 190, editable: true
    },
    {
    field: 'postcode', headerName: 'Postal code', width: 130, editable: true, 
    },
    {
    field: 'city', headerName: 'City', width: 120, editable: true, 
    },
    {
    field: 'email', headerName: 'Email', width: 200, editable: true, 
    },
    {
    field: 'phone', headerName: 'Phone', width: 170, editable: true, 
    },
    ];

    const rows = customers.map((customer, index) => ({
        id: index + 1, ...customer,
    }));


return (
    <Box sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
);
};
