import React from 'react';
import RenderSeries from "@/components/RenderSeries/RenderSeries";
import {Series} from "@/type/series";
import {Box, Stack, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export interface AddSeriesProps {

}

function AddSeries({}: AddSeriesProps) {
    const [series, setSeries] = React.useState<Series[]>([])

    return (
        <Box>
            <Stack direction='row'>
                <TextField placeholder={'Номер серії'}/>
                <TextField placeholder={'Введіть назву серії'}/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker/>
                </LocalizationProvider>
            </Stack>

            <RenderSeries series={series}/>
        </Box>
    );
}

export default AddSeries;
