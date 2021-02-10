import React from "react";

export default function Table() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Alamat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Daffa</td>
                    <td>daffa@gmail.com</td>
                    <td>Ponorogo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td> 1</td>
                    <td> 2 </td>
                    <td> 3 </td>
                </tr>
            </tbody>
        </table>

    )
}
