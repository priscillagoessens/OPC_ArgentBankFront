import CardAccount from "../../components/CardAccount/CardAccount"
import Title from "../../components/Title/Title"
import "./_Profile.scss"
import {userProfile } from '../../actions/action'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

function User() {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.user)
  // console.log(user)
  
  useEffect(()=>{
    dispatch(userProfile())
  },[dispatch])
  const firstName = useSelector((state) => state.user.firstName);


  return (
    <main className="main bg-dark">     
      <Title name={firstName}/>
      <h2 className="sr-only">Accounts</h2>
      <CardAccount/>
      {/* <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section> */}
    </main>
  )
}

export default User