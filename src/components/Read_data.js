import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://6572e6de192318b7db413c53.mockapi.io/fakeData')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)

        console.log(localStorage)
}


    const onDelete = (id) => {
        var konfirmasi = window.confirm("apakah kamu yakin ingin menghapus data ini ?");
        if(konfirmasi){
            axios.delete(`https://6572e6de192318b7db413c53.mockapi.io/fakeData/${id}`)
            .then(() => {
                alert("Successfully Delete Data");
                getData();
            });
        }
    }

    const getData = () => {
        axios.get(`https://6572e6de192318b7db413c53.mockapi.io/fakeData`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                    <Table.HeaderCell>Update/Delete</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            <Table.Cell> 
                                <Link to='/update'>
                                    <Button onClick={() => setData(data)}>Edit</Button>
                                </Link>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                          </Table.Row>
                     )})}
                  </Table.Body>
            </Table>
        </div>
    )
}
