import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function FilterDropDown({ setFilter }) {
  const options = ['All', 'Apparel', 'Accessories', 'Electronics'];
  const [selected, setSelected] = React.useState('All');

  const handleChange = e => {
    const val = e.target.value;
    setSelected(val);
    setFilter(val === 'All' ? null : val);
  };

  return (
    <Box>
        <FormControl size='small' sx={{ minWidth: 160 }}>
            <InputLabel>Category</InputLabel>
            <Select
                value={selected}
                label='Category'
                onChange={handleChange}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' } }}>
                {options.map(tag => <MenuItem key={tag} value={tag}>{tag}</MenuItem>)}
            </Select>
        </FormControl>
    </Box>
  );
}
