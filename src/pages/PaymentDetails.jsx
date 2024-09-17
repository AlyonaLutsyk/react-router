import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom"
import { getPaymentById } from "../payment-api";
import PaymentInfo from "../components/PaymentInfo";



export default function PaymentDetails() {
    const { paymentId } = useParams();
    const [payment, setPayment] = useState(null);
    

    useEffect(() => { 
        async function fetchData() {
            const data = await getPaymentById(paymentId);
            setPayment(data);
        }
        fetchData();
    }, [paymentId]);

    return (
        <div>
            <h1>PaymentsDetails</h1>
            {payment && <PaymentInfo payment={payment} />}
            
            <ul>
                <li><NavLink to="bank" >Bank</NavLink></li>
                <li><NavLink to="receipt">Receipt</NavLink></li>
                <Outlet/>
            </ul>
        </div>
    )
}