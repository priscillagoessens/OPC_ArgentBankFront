import CardAccount from "../../components/CardAccount/CardAccount"
import Title from "../../components/Title/Title"
import Button from "../../components/Button/Button"
import "./_Profile.scss"
import { userProfile,updateUser } from "../../redux/actions/action"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function User() {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const [isEditing, setIsEditing] = useState(false); 
  const [userName, setUserName] = useState('');

  const showEditForm= (e) =>{
    e.preventDefault();
    setIsEditing(true)
  }

  const handleChange = (e)=>{
    e.preventDefault();
    dispatch(updateUser({userName}))
    setIsEditing(false)
  }

  const closeEditForm = (e) =>{
    setIsEditing(false)
  }

  useEffect(()=>{
    dispatch(userProfile())
  },[dispatch])
  
  return (
    <main className="main bg-dark">    
     {isEditing ? (
        <form className="header-edit-form" >
          <h1>Edit user info</h1>
          <div className="edit-form-elts">
            <label htmlFor="userName">User name: </label>
            <input type="text" id="userName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          <div className="edit-form-elts">
            <label htmlFor="firstName">First name: </label>
            <input type="text" id="firstName" value={firstName} disabled/>
          </div>
          <div className="edit-form-elts">
            <label htmlFor="lastName">Last name: </label>
            <input type="text" id="lastName" value={lastName} disabled/>
          </div>
          <div className="edit-form-buttons">
            <Button className="edit-button" onClick={handleChange}>
              Save
            </Button>
            <Button className="edit-button" onClick={closeEditForm}>
              Cancel
            </Button>
          </div>
        </form>
      ) : ( 
          <>
            <Title name={firstName} lastname={lastName}/>
            <Button className="edit-button" onClick={showEditForm}>
              Edit Name
            </Button>
            </>
          )}
          <>
            <h2 className="sr-only">Accounts</h2>
            <CardAccount 
              title="Argent Bank Checking (x8349)"
              amount="$2,082.79"
              description="Available Balance"
            />
            <CardAccount
              title="Argent Bank Savings (x6712)"
              amount="$10,928.42"
              description="Available Balance"
            />
            <CardAccount
              title="Argent Bank Credit Card (x8349)"
              amount="$184.30"
              description="Current Balance"
            />
          </> 
    </main>
  )
}

export default User