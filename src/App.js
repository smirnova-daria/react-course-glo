import React from 'react'
import './App.css'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { NavBar } from './Components/NavBar/NavBar'
import { Menu } from './Components/Menu/Menu'
import { GlobalStyle } from './Components/Styled/GlobalStyle'
import { ModalItem } from './Components/Modal/ModalItem'
import { Order } from './Components/Order/Order'
import { useOpenItem } from './Components/Hooks/useOpenItem'
import { useOrders } from './Components/Hooks/useOrders'
import { useAuth } from './Components/Hooks/useAuth'
import { useTitle } from './Components/Hooks/useTitle'
import { OrderConfirm } from './Components/Order/OrderConfirm'
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm'
import { Context } from './Components/helpers/context'

const firebaseConfig = {
    apiKey: 'AIzaSyC7lcF5DhLafKFygiPG91JsI7nWRvCC2OA',
    authDomain: 'mrdonalds-6b7e3.firebaseapp.com',
    databaseURL:
        'https://mrdonalds-6b7e3-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'mrdonalds-6b7e3',
    storageBucket: 'mrdonalds-6b7e3.appspot.com',
    messagingSenderId: '331538168050',
    appId: '1:331538168050:web:7a674f4522160d5bcd786b',
}

const firebase = initializeApp(firebaseConfig)

function App() {
    const auth = useAuth(getAuth(firebase))
    const database = getDatabase(firebase)
    const openItem = useOpenItem()
    const orders = useOrders()
    const orderConfirm = useOrderConfirm()
    useTitle(openItem.openItem)

    return (
        <Context.Provider
            value={{
                auth,
                openItem,
                orders,
                orderConfirm,
                firebaseDatabase: database,
            }}
        >
            <GlobalStyle />
            <NavBar />
            <Order />
            <Menu />
            {openItem.openItem && <ModalItem />}
            {orderConfirm.openOrderConfirm && <OrderConfirm />}
        </Context.Provider>
    )
}

export default App
