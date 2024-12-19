import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import dayjs, { Dayjs } from 'dayjs';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';

import "./styles.css";

const DateSelectComp = () => {

    
    const [value, setValue] = useState<DateRange<Dayjs>>([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
    ]);
    
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate("/room-grid");
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className="row clearfix datePicker">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangePicker']}>
                        <DemoItem component="DateRangePicker">
                            <DateRangePicker
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
                <div>
                    
                </div>
                <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="field-label e-label">&nbsp;</div>
                    <div className="field-inner">
                        <button className="theme-btn btn-style-one" type='submit'><span className="btn-title">Check Availability</span></button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default DateSelectComp