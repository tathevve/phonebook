import React, { useState } from 'react'
import BasicSelect from '../shared/Select';

const countries = [
    {
        id: 11,
        label: 'Armenia',
        value: 'Armenia'
    },
    {
        id: 22,
        label: 'Russia',
        value: 'Russia'
    },
    {
        id: 33,
        label: 'Iran',
        value: 'Iran'
    },
]

const arr = [
    {
        id: 34,
        ttt: 'aaa',
        bbb: 'fdsfds'
    },
    {
        id: 35,
        ttt: 'fdsfsdgsdgdss',
        bbb: 'fdsgsdgdsgesd'
    },
    {
        id: 36,
        ttt: 'qweqwrwqrwq',
        bbb: 'qwerqwrqw'
    },
]


export default function () {
    const [selectedCountry, setSelectedCountry] = useState('')

    const [stat, setStat] = useState('')

    const handleChange = (event) => {
        setSelectedCountry(event.target.value)
    }
    const handleStat = (event) => {
        setStat(event.target.value)
    }
const [show, setShow] = useState(true);

    return (
        <React.Fragment>
            <div style={{ marginTop: 50 }}>
                {/* <BasicSelect
                    options={countries}
                    keyProp='id'
                    label='Countries'
                    value={selectedCountry}
                    labelProp='label'
                    valueProp='value'
                    onChange={handleChange} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <BasicSelect
                    options={arr}
                    keyProp='id'
                    label='Havai Label'
                    value={stat}
                    labelProp='ttt'
                    valueProp='bbb'
                    onChange={handleStat} /> */}
                <br/>

                <button onClick={() => setShow(!show)}>
                    {/* {show ? "Hide Element Below" : "Show Element Below"} */}
                    aa
                </button>

                <div>Toggle Challenge</div>
            </div>
        </React.Fragment>
    )
}
