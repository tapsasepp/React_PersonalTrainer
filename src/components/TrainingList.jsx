import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { fi } from 'date-fns/locale';

export default function TrainingList() {
    const [trainings, setTrainings] = React.useState([]);


    // API call for trainings, inlucding linked customers
    const fetchTrainings = async () => {
    try {
    const response = await fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/gettrainings');
    const data = await response.json();
    setTrainings(data);
    console.log(data);
    }   catch (e) {
    console.error(e);
    }};

    React.useEffect(() => {
      fetchTrainings();
    }, []);

    const columns = [{
    field: 'activity', headerName: 'Activity', width: 150, editable: true
    },
    {
    field: 'duration', headerName: 'Duration', width: 130, editable: true
    },
    {
    field: 'date', headerName: 'Date', width: 240, editable: true
    },
    {
    field: 'firstname', headerName: 'First name', width: 180, editable: true
    },
    {
    field: 'lastname', headerName: 'Last name', width: 190, editable: true
    },
    ];

    const combinedRows = trainings.map((training, index) => ({
      id: index + 1,
      activity: training.activity,
      duration: training.duration,
      date: format(new Date(training.date), 'dd.MM.yyyy HH:mm', { locale: fi }), // https://date-fns.org/v4.1.0/docs/format
      firstname: training.customer.firstname,
      lastname: training.customer.lastname
    }));


return (
    <Box sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={combinedRows}
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