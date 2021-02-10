import React, {useState} from "react";
import Calendar from 'react-calendar';

export default function CariPenerbangan() {
    const [date,setDate] = useState(new Date());

    const handleChange = (date) => {
        setDate(date);
    };

    return (
        <div className="container d-flex justify-content-between">
            <div className="dropdown">
        
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Kota Tujuan
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Kota1</a>
                    <a className="dropdown-item" href="#">Kota2</a>
                    <a className="dropdown-item" href="#">kota3</a>
                </div>

            </div>
            <div className="dropdown">
        
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tanggal
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" className="w-45">
                <a className="dropdown-item" href="#">
                <Calendar
                 onChange={handleChange}
                 value={date.date}/>
                </a>
                 
            </div>
                
            </div>

          
        </div>



    )
}
