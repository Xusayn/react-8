import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [users,setusers]=useState([])
  const [posts,setposts]=useState([])
  const [todos,settodos]=useState([])
  const [coment,setcoment]=useState([])
  const [photos,setphotos]=useState([])


  const fetchdata=async()=>{
    try {
      const res= await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data= await res.json()
    setusers(data)
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(()=>{
    fetchdata()
  },[])


      const fetchposts= async (id)=>{
        try {
          const res= await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        const data= await res.json()
        setposts(data)
        
        } catch (error) {
          console.log(error);
        }
      }






      const fetchtodos= async (id)=>{
        try {
          const res= await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        const data= await res.json()
        settodos(data)
        
        } catch (error) {
          console.log(error);
        }
      }



      const fetchcomments= async (id)=>{
        try {
          const res= await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        const data= await res.json()
        setcoment(data)
        
        } catch (error) {
          console.log(error);
        }
      }




      const fetchphotos= async (id)=>{
        try {
          const res= await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        const data= await res.json()
        setphotos(data)
        
        } catch (error) {
          console.log(error);
        }
      }




      return (
        <div className="home">
            <div className="cards">
         {users.map((user)=>(
            <div key={user.id} className="card">
              <h2>ID     {user.id}</h2>
              <h3>Name:     {user.name}</h3>
              <h3>Username:     {user.username}</h3>
              <h3>Email:     {user.email}</h3>
    
              <div className="buttons">
                <button className='posts' onClick={()=>fetchposts(user.id)}>POSTS</button>
                <button className='todos' onClick={()=>fetchtodos(user.id)}>TODOS</button>
                <button className='todos' onClick={()=>fetchcomments(user.id)}>Comment</button>
                <button className='todos' onClick={()=>fetchphotos(user.id)}>Gallery</button>


              </div>
            </div>
          ))}
         </div>
    
            <hr />



         <div className="postss">
         <h1>Posts :</h1>

         {posts.map((post)=>(
            <div key={post.id} className="post">
              <h1>Posts</h1>

              <h1>Userid: {post.userId}</h1>
              <h3>id:{post.id}</h3>
              <h3>{post.title}</h3>
            </div>
         ))}
         </div>


         <div className="todoss">
         <h1>Todos :</h1>

          {todos.map((t)=>(
            <div key={t.id} className="todo">
              <h1>Todos</h1>
              <h1>Userid:{  t.userId}</h1>

              <h3>ID:{  t.id}</h3>
              <h3>title:{  t.title}</h3> 

            </div>
          ))}
         </div>




         <div className="coment">
          <h1>Comments :</h1>
          {coment.map((c)=>(
            <div key={c.id} className="todo">
              <h1>Comments</h1>
              <h1>Userid:{  c.postId}</h1>
              <h3>ID:{  c.id}</h3>
              <h3>name:{  c.name}</h3> 
            </div>
          ))}
         </div>




         <div className="coment">
          <h1>Photos :</h1>
          {photos.map((p)=>(
            <div key={p.id} className="todo">
              <h3>Userid:{  p.albumId}</h3>
              <img src={p.url} alt="" />


            </div>
          ))}
         </div>
         
        </div>
            
      )


      
    } 
  


  


export default App
