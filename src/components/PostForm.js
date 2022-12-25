import React, {useState} from "react";
import MyInput from "./UI/Input/MyInput"
import MyButton from "./UI/Button/MyButton"

function PostForm({create}) {
   const [post, setPost] = useState({
      title: '',
      body: ''
    });
  
    function addNewPost(e) {
      e.preventDefault()
      const newPost = {
         ...post, id: Date.now()
      };
      create(newPost)
      setPost({title: '', body: ''})
    };
  
   return(
      <form>
        {/**УПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
        <MyInput 
          type='text' 
          placeholder="Название поста"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
       />
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type='text' 
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

   );
};

export default PostForm;