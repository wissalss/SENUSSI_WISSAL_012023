import Transaction from "../../component/Transaction/Transaction";
import Modi from "../../component/UserModification/UserModification"
import "./User.css"
import { selectUser } from "../../redux/Selector"
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { fetchUserData, signOut } from "../../redux/Actions";
import { useNavigate } from "react-router-dom";

function User() {
    
    const userData = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const token = (localStorage.getItem('token') || sessionStorage.getItem('token'))

    useEffect(() => {
        if (!userData.data) {
            if ((token)) {
                dispatch(fetchUserData(token))
                navigate('/profile')
            }
            else {
                localStorage.clear()
                sessionStorage.clear()
                dispatch(signOut())
                navigate('/login')
            }
        }

    }, [dispatch, navigate, token, userData])

    if (!userData.data) {
        return null
    }

    return (
        <div className="pageContainer">
            <main className="main bg-dark">
                < Modi userData={userData} />
                <h2 className="sr-only">Accounts</h2>
                <Transaction accountTitle='Argent Bank Checking (x8349)' accountAmount='$2,082.79' accountBalance='Available Balance' />
                <Transaction accountTitle='Argent Bank Savings (x6712)' accountAmount='$10,928.42' accountBalance='Available Balance' />
                <Transaction accountTitle='Argent Bank Credit Card (x8349)' accountAmount='$184.30' accountBalance='Current Balance' />
            </main>
        </div>
    );
}

export default User;