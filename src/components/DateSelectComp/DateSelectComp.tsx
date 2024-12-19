import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import dayjs, { Dayjs } from 'dayjs';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';

const DateSelectComp = () => {

    
    const [value, setValue] = useState<DateRange<Dayjs>>([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
    ]);
    
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate("/room-single");
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className="row clearfix">
                {/* <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="field-label">Arrival</div>
                    <div className="field-inner">
                        <input id="arrival-date" className="date-picker" type="date" name="field-name" value={roomCheckInfo.arrival.toISOString().split('T')[0]} onChange={(e) => setRoomCheckInfo({ ...roomCheckInfo, arrival: new Date(e.target.value) })} placeholder="" />
                    </div>
                </div>
                <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="field-label">Departure</div>
                    <div className="field-inner">
                        <input id="depart-date" className="date-picker" type="date" name="field-name" value={roomCheckInfo.departure} onChange={(e) => setRoomCheckInfo({ ...roomCheckInfo, departure: e.target.value })} placeholder="" />
                    </div>
                </div> */}
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
                {/* <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="field-label">Guests</div>
                    <div className="field-inner">
                        <div className="check-sel-box">
                            <div className="check-sel-btn">
                                <span className="adult-info">2 Adults.</span>
                                <span className="child-info">1 Children</span>
                            </div>
                            <ul className="check-sel-droplist">
                                <li>
                                    <div className="sel-title">Select Adults:</div>
                                    <div className="clearfix">
                                        <div className="radio-block adult-block"><input type="radio" name="adult-group" id="radio-1" value="1 Adults." /><label htmlFor="radio-1">1</label></div>
                                        <div className="radio-block adult-block"><input type="radio" name="adult-group" id="radio-2" value="2 Adults." checked /><label htmlFor="radio-2">2</label></div>
                                        <div className="radio-block adult-block"><input type="radio" name="adult-group" id="radio-3" value="3 Adults." /><label htmlFor="radio-3">3</label></div>
                                        <div className="radio-block adult-block"><input type="radio" name="adult-group" id="radio-4" value="4 Adults." /><label htmlFor="radio-4">4</label></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sel-title">Select Children:</div>
                                    <div className="clearfix">
                                        <div className="radio-block child-block"><input type="radio" name="child-group" id="radio-5" value="1 Children" checked /><label htmlFor="radio-5">1</label></div>
                                        <div className="radio-block child-block"><input type="radio" name="child-group" id="radio-6" value="2 Children" /><label htmlFor="radio-6">2</label></div>
                                        <div className="radio-block child-block"><input type="radio" name="child-group" id="radio-7" value="3 Children" /><label htmlFor="radio-7">3</label></div>
                                        <div className="radio-block child-block"><input type="radio" name="child-group" id="radio-8" value="4 Children" /><label htmlFor="radio-8">4</label></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
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