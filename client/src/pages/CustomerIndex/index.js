import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useLocation, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const CustomerIndex = () => {
    const [data, setData] = useState();
    const pathname = useLocation().pathname;

    const getData = async () => {
        const response = await api(pathname)
        setData([...response]);
    }
            
    useEffect(() => {
        getData();
    }, []);

    if (!data) {
        console.log('no data');
        return <></>;
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Customer Name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(customer => (
                        <tr>
                            <td>
                                {customer.id}
                            </td>
                            <td>
                                <Link to={`/customers/customer/${customer.id}`}>
                                    {`${customer.first_name} ${customer.last_name}`}
                                </Link>     
                            </td>
                            <td>
                                {customer.email}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
};

export default CustomerIndex