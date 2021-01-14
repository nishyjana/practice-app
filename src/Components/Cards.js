
import React,{useState,useEffect} from 'react';
import { Button , Modal,Input,Card,CardTitle,CardText,CardBody,InputGroup,ModalBody,FormGroup, Label} from 'reactstrap';
import '../CSS/card.css';
import axios from 'axios';



export default function Cards() {
  const [post,setpost]=useState([]);
  const[comment,setComment]=useState([]);

  const [isModal, setIsModal]= useState(false);
  const [createComment, setCreateComment] = useState(
    { comment: ''}
  );
  const openModalistrue = ()=>{
    setIsModal(true)
  }
  const openmodalisfalse =() =>{
    setIsModal(false)
  }
  const handleChange = (event) => {
    setCreateComment({...createComment, [event.target.comment]: event.target.value})
  }
  const handleSubmit = (e) => {
   
    axios.post('http://localhost:8001/Comments', createComment)
      .then(function (response) {
          console.log(response)
      })
      .catch(function (error) {
          console.log(error)
      }) 
      openmodalisfalse()
      e.preventDefault()
      
    }
  useEffect(()=>{
      async function fetchdata (){
        const result = await axios.get(
          'http://localhost:8001/Posts'
        );
        setpost(result.data)

      }
      async function fetchComments (){
        const result = await axios.get(
          'http://localhost:8001/Comments'
        );
        setComment(result.data)

      }
      
      fetchdata();
      fetchComments();
    
     
  },[]);
  
  let cardpost = post.map(p=>{
    return(
      <Card>
     
      <CardBody>
        <CardTitle tag="h5">{p.title} </CardTitle>
       
        <CardText>{p.description} </CardText>
        <h6>Comments</h6>
        <CardText>{comment.map(p => <div> {p.comment}</div>)}</CardText>
        <Button onClick={openModalistrue}>Comment</Button>
      </CardBody>
      
    </Card>
  

    )
  });
  
  return (
    
    
    

    <div className="Cards__card">
      {cardpost}
      
      
     
      
        
       
        <Modal isOpen={isModal}>
          <Button style={{backgroundColor:"red"}} onClick={openmodalisfalse}>X</Button>
          
          <FormGroup>
            <Label>Comment</Label>
            <Input type="textarea"  id="comment" value={createComment.comment} onChange={handleChange}/>  
          </FormGroup>
          <Button onClick={handleSubmit}    style={{color:"white",width:"450px",paddingLeft:"70px",alignItems:"center",textAlign:"center",backgroundColor:"black"}}>Comment</Button>
          

        </Modal>
      
    </div>
  );
}
