import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useLocation, Link } from "react-router-dom";

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
            {data.map(customer => (
                <div key={customer.id}>
                    <Link to={`/customers/customer/${customer.id}`}>{`${customer.first_name} ${customer.last_name}`}</Link>
                </div>
        ))}
        </div>
    )
};

export default CustomerIndex