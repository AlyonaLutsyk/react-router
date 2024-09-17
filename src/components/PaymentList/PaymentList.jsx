import css from './PaymentList.module.css'
import PaymentCard from '../PaymentCard/PaymentCard'


export default function PaymentLis({ payments }) {
    return (
        <ul className={css.list}>
            {payments.map((payment) => (
                <li key={payment.id}>
                    <PaymentCard payment={payment} />
                </li>
            ))}
        </ul>
    );
}