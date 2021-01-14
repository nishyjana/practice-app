import React,{useState} from 'react';
import  '../CSS/Post.css';
import { Button , Modal,Input,InputGroup,ModalBody,FormGroup, Label} from 'reactstrap';
import Card from './Cards';
import axios from 'axios';
function Post() {


 let [isModel,setIsModel] = useState(false);
 
 const [createPost, setCreatePost] = useState(
  { title: '', description: ''}
);

const openModalistrue = ()=>{
  setIsModel(true)
}
const openmodalisfalse =() =>{
  setIsModel(false)
}

const handleChange = (event) => {
  setCreatePost({...createPost,  [event.target.title]: event.target.value, [event.target.description]:event.target.value})
}
const handleSubmit = (e) => {
 
  axios.post('http://localhost:8001/Posts', createPost)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    }) 
    openmodalisfalse()
    e.preventDefault()
    
  }
// const handleChange = (event) => {
//   setCreatePost({...createPost, [event.target.title]: event.target.description})
// }




 



 

      
  

  return (
   

    <div className="Post__button">
     <Button   onClick={openModalistrue}>Create new Post</Button>
     <Modal isOpen={isModel} toggle >
         <Button style={{backgroundColor:"red"}} onClick={openmodalisfalse}>x</Button>
        <ModalBody>
          <FormGroup>
            <Label>Title</Label>
            <Input type="text"  id="title"  value={createPost.title}  onChange={(e)=>handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input type="textarea" id="description" value={createPost.description}  onChange={(e)=>handleChange} />
          </FormGroup>
          <Button  onClick={handleSubmit.bind(this)} style={{color:"white",width:"450px",paddingLeft:"70px",alignItems:"center",textAlign:"center",backgroundColor:"black"} }>Publish</Button>
          
        </ModalBody>

        
         

        </Modal>
        <div className="Post__card">
      <Card/>
      </div>
      
      
    </div>
    
  );
}

export default Post;