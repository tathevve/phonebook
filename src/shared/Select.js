import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ options, label, value, onChange, keyProp, valueProp, labelProp }) {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value ?? ''}
                    label={label}
                    onChange={onChange}
                >
                    {options?.length > 0 && options.map((item) => {
                        return (
                            <MenuItem value={item[valueProp]} key={item[keyProp]}>{item[labelProp]}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
