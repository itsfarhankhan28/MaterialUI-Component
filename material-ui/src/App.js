import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button"
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import ButtonGroup  from '@mui/material/ButtonGroup';
import { useState } from 'react';
import CheckBox  from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import FavouriteIcon from '@mui/icons-material/Favorite'

function App() {

  // const [state , setState] = useState('')

  const [checked , setChecked] = useState(true)

  return (
    <>
    <div className='content'>
      <FormControlLabel control={
        <CheckBox checked={checked}
        onChange={(e)=>setChecked(e.target.checked)} icon={<FavouriteIcon/>} checkedIcon={<FavouriteIcon/>} size="large" color='error' inputProps={{'aria-label':'secondary-checkbox'}}/>
      }label="Checkbox Label"/>


      <ButtonGroup variant='contained' size='large'>
      <Button style={{
        fontSize: 20
      }} startIcon={<SaveIcon/>}color='success'>
        SAVE
      </Button>
      <Button style={{
        fontSize: 20
      }} startIcon={<DeleteIcon/>} color='error'>
        DELETE
      </Button>
      </ButtonGroup>
      {/* <p className='btnState'>State:{state}</p> */}
    </div>
    </>
  )
}

export default App;
