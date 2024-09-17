import { Route, Routes } from 'react-router-dom'
import css from './App.module.css'
import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound'
import Navigation from '../../Navigation/Navigation'
import PaymentDetails from '../../pages/PaymentDetails'
import Payments from '../../pages/Payments'
import BankInfo from '../BankInfo'
import PaymentReceipt from '../PaymentReceipt'


export default function App() {
    return (
        <div className={css.container}>
            <Navigation/>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/payments" element={<Payments />} />
                <Route path="/payments/:paymentId" element={<PaymentDetails />}>
                    <Route path='bank' element={<BankInfo/>} />
                    <Route path='receipt' element={<PaymentReceipt/>} />

                </Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>

        </div>
    )
}