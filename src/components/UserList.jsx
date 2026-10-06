import {useEffect,useState} from "react"
function UserList(){
    const [error,setError]=useState(null);
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const getUsers=async()=>{
            try{
               const response= await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error("loadin users failed");
                }
                const data=await response.json()
                setUsers(data);
            }catch(err){
setError(err.message)
            }finally{
                setLoading(false)
            }
            }
           getUsers()
    },[])
    return(
        <>
        {loading? <p>users loading ...</p>: error? <p>{error}</p>:users.map(user=><p key={user.id}>{user.name}</p>)}
        </>
    )
}

export default UserList