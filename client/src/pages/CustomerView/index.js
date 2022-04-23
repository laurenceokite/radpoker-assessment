import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/esm/Table";
import { useLocation, useParams } from "react-router-dom";
import { api } from "../../api";

const CustomerView = () => {
    const [data, setData] = useState();
    const pathname = useLocation().pathname;

    const getData = async () => {
        const response = await api(pathname);
        setData(response);
    }
            
    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    if (!data) {
        return <></>;
    }

    const { customer, accounts } = data; 
    

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Reason for Joining
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{`${customer.first_name} ${customer.last_name}`}</td>
                        <td>{customer.email}</td>
                        <td>{customer.reason_for_joining}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>
                            Associated Accounts
                        </th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts[0].map(account => (
                        <tr>
                            <td>{account.id}</td>
                            <td>{account.address}</td>
                            <td>{account.city}</td>
                            <td>{account.state}</td>
                            <td>{account.zip_code}</td>
                        </tr>
                    ))}
                </tbody>

               
            </Table>
           
        </div>
    )

}

export default CustomerView;