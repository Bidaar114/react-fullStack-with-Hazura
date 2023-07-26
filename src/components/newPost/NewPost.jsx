import ReactQuill from "react-quill";
import"react-quill/dist/quill.snow.css";
import { Button, Input, Label, PostForm, Preview } from "./Style";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST, UPDATE_POST } from "../../graphql/Mutations";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST } from "../../graphql/Query";


 const NewPost = () => {



 
const [ body, setBody ] = useState("");
const [ title, setTitle ] = useState("");
const [imagePreview, setImagePreview ] = useState(null);
const [loaded,  setLoaded] = useState(false);
const [localLoading,  setLocalLoading] = useState(false);
const [selectedFile,  setSelectedFile] = useState(null);
const [thumnail,  setThumnail] = useState(null);
const {Id} = useParams();
const navigate = useNavigate();

useEffect(() =>{
console.log(loaded);
},[loaded]);


const [updatePost] = useMutation(UPDATE_POST)
const [addPost] = useMutation(ADD_POST)
const {data:postData} = useQuery(GET_POST,{
  variables:{id: Id},
})



useEffect(() =>{
  if(Id && postData){
    const { id, title, body, thumnail, date} = postData.Blogs[0];
    setBody(body);
    setTitle(title);
    setThumnail(thumnail);
    setImagePreview(thumnail)
  }
  },[postData ]);

const handleUpload = async ()=>{

  try{

  const formData = new FormData();
  formData.append("file", selectedFile);
  formData.append('upload_preset', 'Ibraaa');
  
    setLocalLoading(true)

    const {data} = await axios.post("https://api.cloudinary.com/v1_1/dsduhprrk/image/upload", formData) 

    setLocalLoading(false)
    setLoaded(true);
    console.log(data);
    setLoaded(true)
    setThumnail(data.secure_url);
  }catch(err){
    console.log(err);
  }

}



const handleSubmit = async (e) =>{
  e.preventDefault();

   if(!thumnail || !title || !body) return alert('Please Fill empty fields');

 try {

  if (Id) {
  updatePost({
      variables: {
        id:Id,
        title, 
        body,
        thumnail
      }
    }).then(() => {navigate('/')});
    
  }else{ 
  
   addPost({
    variables: {
      title, 
      body,
      thumnail
    }
  }) .then(() => {navigate('/')});
  
};
}catch(err){
  alert(err);
  console.log(err);
}
};
const handleImageSelect = (event) => {
  setLoaded(false);
  const file = event.target.files[0];
  setSelectedFile(file);
  setImagePreview(window.URL.createObjectURL(file));
}

  return (
    <PostForm onSubmit={handleSubmit}>
      <Label>Post Title</Label>
      <Input onChange ={(event) => setTitle(event.target.value)}

      placeholder="post title" type="text" id='title' name ='title'
      value={title}
      />
      <Label>Post Body</Label>
  
      <ReactQuill dangerouse  onChange = {(event) => setBody(event)}    
      theme="snow"
      modules={NewPost.modules}
      formats={NewPost.formats}
      value={body}
      />
      <Input 
       type ='file' id ='fname' name ='fname'
       onChange={handleImageSelect}
      />
     {imagePreview && <Preview src={imagePreview}/>}

     {imagePreview && <Button type= 'button'  onClick={handleUpload} >
       {localLoading ? 'Uploading....' : 'Upload'}</Button>}
     
      <Button type= 'submit'>{Id ? 'Update' : 'Post'}</Button>
    </PostForm> 
  )
};

NewPost.modules = {
	toolbar: [
		[{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
		[{ size: [] }],
		["bold", "italic", "underline", "strike", "blockquote"],
		[{ list: "ordered" }, { list: "bullet" }],
		["link", "image", "video"],
		["clean"],
		["code-block"],
	],
};

NewPost.formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"link",
	"image",
	"video",
	"code-block",
];

export default NewPost;