import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import GridList from "./components/GridList";
import { getUsers } from "./helpers/fetch";




const App = () => {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState();
  useEffect(() => {
    const getData = async()=>{
      const response = await getUsers();
      setUsers(response.data);
    }
    getData();
    
  }, [])
  return (
    <div className="container">
      <h1 className="text-primary">Kento System Test</h1>
      <hr />
      <Dropdown users={users} setUserSelected={setUserSelected}/>
      {userSelected && <GridList user={userSelected}/>}
      <Footer />
    </div>

  )
}

export default App;
