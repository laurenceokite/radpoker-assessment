import React, { useState, useEffect } from "react";
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
            <div>{`${customer.first_name} ${customer.last_name}`}</div>
            <div>{customer.email}</div>
            <div>{customer.reason_for_joining}</div>

            <div>Associated Accounts</div>
            {accounts.map(account => (<div>{`${account.id} ${account.address} ${account.city} ${account.state} ${account.zip_code}`}</div>))}
           
        </div>
    )

}

export default CustomerView;