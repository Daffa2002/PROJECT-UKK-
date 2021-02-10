import React from "react";

export default function Maskapai() {
    return (
        <div className="maskapai container">
            <div className="container">
                <div className="col-md-12 d-flex justify-content-between">
                    <h2>Maskapai</h2>
                    {/* <h2>Kode Pesawat</h2> */}
                </div>
                <div className="col-md-12 mt-2 d-flex justify-content-between">
                    <select className="col-md-4 form-select" aria-label="Default select example">
                        <option selected>Maskapai</option>
                        <option value="1">Garuda Indonesia - DM00017</option>
                        <option value="2">Batik Air - DM00020</option>
                        <option value="3">Lion Air - DM00025</option>
                    </select>
                    {/* <select className="col-md-4 form-select" aria-label="Default select example">
                        <option selected>Kode Pesawat</option>
                        <option value="1">DM00017</option>
                        <option value="2">DM00020</option>
                        <option value="3">DM00025</option>
                    </select> */}
                </div>
            </div>
            <div className="container mt-5 shadow rounded-3 p-3">
                <table className="table border-top-0">
                    <thead>
                        <tr>
                            <th scope="col">Maskapai</th>
                            <th scope="col">Kode Pesawat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Garuda Indonesia
                            </td>

                            <td>
                                DM00017
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Batik Air
                            </td>
                            <td>
                                DM00020
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lion Air
                            </td>
                            <td>
                                DM00025
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    )
}
