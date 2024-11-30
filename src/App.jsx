import { useState } from 'react'
import './App.css'
import CustomerList from './components/CustomerList'
import TrainingList from './components/TrainingList'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PersonIcon from '@mui/icons-material/Person';

function App() {

  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  }

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
      <Tab icon={<FitnessCenterIcon />} label="TRAINING"  />
      <Tab icon={<PersonIcon />} label="CUSTOMERS"  />
      </Tabs>
    </Box>

    {tabValue === 0 && (
      <div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <div style={{ fontSize: '1.3rem', color: 'black'}}>
        <TrainingList/>
        </div>
        </Box>
      </div>
    )}

    {tabValue === 1 &&  (
      <div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <CustomerList/>
        </Box>
      </div>
      )}
    </div>
  );
}

export default App
