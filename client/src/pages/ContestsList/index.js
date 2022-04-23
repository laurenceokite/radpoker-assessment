import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../api";
import Table from 'react-bootstrap/Table';

const ContestsList = () => {
    const [data, setData] = useState();
    const pathname = useLocation().pathname;

    const getData = async () => {
        const contests = await api(pathname)
        const updated = []
        for (const [key, value] of Object.entries(contests)) {
            const accounts = await api(`/accounts/contest/${value.id}`);
            updated.push({...value, accounts});
        };
        setData(updated);  
    }

            
    useEffect(() => {
        getData();
    }, []);

    console.log(data)

    if (!data) {
        console.log('no data');
        return <></>;
    }


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Contest</th>
                        <th># of Contestants</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {data.map(contest => (
                    <tr>
                        <td>{contest.name}</td>
                        <td>{contest.accounts.length}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ContestsList