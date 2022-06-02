import React, { useRef, useState } from 'react'
import Header from './Header'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { selectAdmin, setAdmin } from '../redux/slicers/adminSlice';
import { Controller, useForm } from "react-hook-form";




const useStyles = makeStyles((theme) => ({
    allowedSizesSpan: {
        margin: '16px auto 0px',
        lineHeight: '1.5',
        fontSize: '0.75rem',
        fontWeight: '400',
        color: 'rgb(99, 115, 129)',
        display: ' block',
        textAlign: 'center',
        width: '100%'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const countries = [
    {
        id: 1,
        value: 'Andorra'
    },
    {
        id: 2,
        value: 'United Arab Emirates'
    },
    {
        id: 3,
        value: 'Afghanistan'
    },
]


const AdminPage = () => {

    const styles = useStyles()
    const [selectedImage, setSelectedImage] = useState(null);
    const inputRef = useRef();
    const dispatch = useDispatch();
    const admin = useSelector(selectAdmin);
    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    const [age, setAge] = React.useState('');

    const handleRemove = () => {
        setSelectedImage(null)
        inputRef.current.value = ''
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        const url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setSelectedImage(reader.result)
        }
    }

    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
        control,
    } = useForm({
        defaultValues: {
            email: admin.avatar,
            password: 'dummyPass',
            name: admin.name,
            phone: admin.phone,
            country: admin.country ?? countries[0]?.value,
            city: admin.city,
            email: admin.email,
            address: admin.address,
            state: admin.state,
            zip: admin.zip,
            about: admin.about


        }
    });
    console.log(errors);
    const onSubmit = (formData) => {
        console.log('Saved')

        dispatch(setAdmin({ ...admin, ...formData }))

    }
    
//react hook form usecallback usememo svagger fetch axios 

    return (
        <div>
            <Header />
            <div style={{ height: '460px', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <Card sx={{ width: "275px", height: '100%' }}>
                    <CardContent className={styles.card}>
                        <Stack sx={{
                            width: '144px', height: '144px', margin: 'auto', borderRadius: '50%',
                            padding: '8px',
                            border: '1px dashed rgba(145, 158, 171, 0.32)',
                        }}>
                            <img alt='img' src={selectedImage ?? admin.avatar}
                                style={{ width: '100%', height: '100%', borderRadius: '50%' }} />

                        </Stack>
                        <span className={styles.allowedSizesSpan}>Allowed *.jpeg, *.jpg, *.png, *.gif<br />  max size of </span>
                        <div>
                            <input
                                type="file"
                                name="myImage"
                                ref={inputRef}
                                onChange={handleImageUpload}
                            />
                            {selectedImage && (
                                <div>
                                    <Button onClick={handleRemove}>Remove</Button>
                                </div>
                            )}
                        </div>

                    </CardContent>

                </Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} onSubmit={handleSubmit(onSubmit)}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Controller
                                    control={control}
                                    name="name"
                                    render={({ field }) => (
                                        <TextField {...field} id="outlined-basic" label="Name" variant="outlined" sx={{ margin: '15px 0', width: '225px' }} />
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="phone"
                                    render={({ field }) => (
                                        <TextField id="outlined-basic" {...field} label="Phone number" variant="outlined" sx={{ margin: '15px 0', width: '225px' }} />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="country"
                                    defaultValue={countries[0]?.value ?? ''}
                                    render={({ field: { value, onChange, onBlur, ref } }) => (
                                        <FormControl sx={{ margin: '15px 0', width: '225px' }}>
                                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={value ?? ''}
                                                ref={ref}
                                                label="Country"
                                                onChange={onChange}
                                                onBlur={onBlur}
                                            >
                                                {countries.map((item) => {
                                                    return (
                                                        <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="city"
                                    render={({ field }) => (
                                        <TextField id="outlined-basic"  {...field} slabel="City" variant="outlined" sx={{ margin: '15px 0', width: '225px' }} />
                                    )}
                                />
                            </CardContent>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Controller
                                    control={control}
                                    name="email"
                                    rules={{
                                        required: 'Required',
                                        pattern: {
                                            value: EMAIL_REGEX,
                                            message: 'Please enter valid email',
                                        },
                                    }}

                                    render={({ field }) => (
                                        <TextField
                                            id="outlined-basic"
                                            {...field}
                                            label="Email"
                                            helperText={errors?.email?.message && errors.email.message}
                                            error={!!errors?.email?.message}
                                            variant="outlined"
                                            sx={{ margin: '15px 0', width: '225px' }}
                                        />

                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="address"
                                    render={({ field }) => (
                                        <TextField id="outlined-basic" {...field} label="Address" variant="outlined" sx={{ margin: '15px 0', width: '225px' }} />

                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="state"
                                    render={({ field }) => (
                                        <TextField id="outlined-basic" {...field} label="State" variant="outlined" sx={{ margin: '15px 0', width: '225px' }} />

                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="zip"
                                    render={({ field }) => (
                                        <TextField id="outlined-basic" label="Zip"{...field} variant="outlined" sx={{ margin: '15px 0', width: '225px' }} />

                                    )}
                                />

                            </CardContent>
                        </div>
                        <CardContent sx={{ padding: '0 8px 0 17px' }}>
                            <Controller
                                control={control}
                                name="about"
                                render={({ field }) => (
                                    <TextField id="outlined-basic" label="about" {...field} variant="outlined" sx={{ margin: '15px 0', width: '100%', height: '250px' }} />

                                )}
                            />
                            <button type='submit'>Save changes</button>


                        </CardContent>

                    </Card>
                </form>


            </div>

        </div >
    )
}

export default AdminPage