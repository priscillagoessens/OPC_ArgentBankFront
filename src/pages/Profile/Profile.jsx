import CardAccount from "../../components/CardAccount/CardAccount"
import Title from "../../components/Title/Title"
import Button from "../../components/Button/Button"
import "./_Profile.scss"
import {  getUserProfile, updateUser } from "../../redux/actions/action"
import {useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


function Profile() {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const inputName = useSelector((state)=> state.user.userName)
  const [isEditing, setIsEditing] = useState(false); 
  const [userName, setUserName] = useState('');
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token ) {
      dispatch(getUserProfile());
    }
  }, [token, dispatch]);

  //Ouvre le formulaire d'edition
  const showEditForm= (e) =>{
    e.preventDefault();
    setIsEditing(true)
  }

  //Ferme le formulaire
  const closeEditForm = (e) =>{
    setIsEditing(false)
  }

  //Envoie le username modifié et ferme le formulaire
  const handleChange = (e)=>{
    e.preventDefault();
    dispatch(updateUser({userName}))
    setIsEditing(false)
  }
  
  return (
    <main className="main bg-dark">   
    <div className="header" >
     {isEditing ? (
      <section className="edit-content">
        <form >
          <h1 className="edit-content-title">Edit user info</h1>
          <div className="edit-content-input-wrapper">
            <label htmlFor="userName">User name: </label>
            <input type="text" id="userName" defaultValue={inputName ? inputName : firstName} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          <div className="edit-content-input-wrapper">
            <label htmlFor="firstName">First name: </label>
            <input type="text" id="firstName" value={firstName} disabled/>
          </div>
          <div className="edit-content-input-wrapper">
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
        </section>
      ) : ( 
          <>
            <Title name={firstName} lastname={lastName}/>
            <Button className="edit-button" onClick={showEditForm}>
              Edit Name
            </Button>
            </>
          )}
          </div>
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

export default Profile