import React from 'react'
import dropdownmenu from './dropdownmenu.css'
import { Navbar } from "../Navbar/Navbar"
import Select from 'react-select';
export const Dropdownmenu = () => {
    const aquaticCreatures = [
        { label: 'Shark', value: 'Shark' },
        { label: 'Dolphin', value: 'Dolphin' },
        { label: 'Whale', value: 'Whale' },
        { label: 'Octopus', value: 'Octopus' },
        { label: 'Crab', value: 'Crab' },
        { label: 'Lobster', value: 'Lobster' },
        { label: 'sanket', value: 'sanket' },
        { label: 'sagar', value: 'sagar' },
        { label: 'jaydeep', value: 'jaydeep' },
        { label: 'jeegar', value: 'jeegar' },
    ];
    return (
        <>
            <Navbar />
            <Select className='select'
                options={aquaticCreatures}
                onChange={opt => console.log(opt.label, opt.value)} />
        

        </>
    )
}
