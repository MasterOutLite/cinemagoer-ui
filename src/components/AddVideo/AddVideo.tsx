"use client"
import React, {useEffect} from 'react';
import {Button, Stack, TextField} from "@mui/material";
import AddNameVideo from "@/components/AddVideo/AddNameVideo";
import SelectParam from "@/components/AddVideo/SelectParam";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import LoadPicture from "@/components/RenderImg/LoadPicture";
import LoadStillsFromTheFilm from "@/components/RenderImg/LoadStillsFromTheFilm";
import AddSeries from "@/components/AddVideo/AddSeries";

function AddVideo() {

    const [names, setNames] = React.useState<string[]>([])

    useEffect(() => {
        console.log('AddVideo:', 'Names', names);
    }, [names]);
    return (
        <Stack>
            <Button variant="contained" sx={{mb: 4}} size="large">Зберегти</Button>
            <Stack direction='row'>
                <LoadPicture/>
                <Stack gap={2} sx={{width: '100%'}}>
                    <AddNameVideo setNameArr={setNames}/>
                    <SelectParam/>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker/>
                    </LocalizationProvider>
                    <TextField fullWidth size={'small'} id="duration" label="Тривалість" variant="outlined"/>
                    <TextField multiline size={'small'} id="main-character" label="Головні герої" variant="outlined"/>
                </Stack>
            </Stack>
            <TextField rows={12} margin='normal'
                       multiline size={'small'} id="description" label="Опис фільму" variant="outlined"/>
            <AddSeries/>
            <LoadStillsFromTheFilm/>
        </Stack>
    );
}

export default AddVideo;
