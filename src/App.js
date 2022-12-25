import React from "react";
import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/Input/MyInput";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: "Javascript", body: 'Description'},
    {id:2, title: "Javascript2", body: 'Description2'},
    {id:3, title: "Javascript3", body: 'Description3'}
  ]);

  const [selectedSort, setSelectesSort] = useState('');
  const [search, setSearch] = useState('');

  const sortedPosts = getSortedPosts();

  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }
// Post пОЛУЧАЕМ ИЗ ДОЧЕРНЕГО КОМПОНЕНТА
  function removePost (post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  function sortPosts(sort) {
    setSelectesSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <div>
        <MyInput
          placeholder='поиск...'
          value={search}
          onChange={e => setSearch(e.targer.value)}
        />
        <MySelect
          value={selectedSort} 
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length !== 0
      ? <PostList remove={removePost} posts={sortedPosts} title="Список постов"/>
      : 
      <h1 style={{textAlign: 'center'}}>
        Посты не найдены!!! 
      </h1>
      }
    </div>
  );
}

export default App;
