import React from 'react';
import ReactPaginate from 'react-paginate';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [posts, setAllPosts] = useState(null);
  const [postsPerPage] = useState(20);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [selection, setSelection] = useState('unclassified');
  const [selected, setSelected] = useState(false)

  const getPostData = (data) => {
    let display;
    if(!selected) {
      display = data
    } else {
      display = data.filter(element => element.is_foaming === selection)
    }

    return (
      display.map(post => {
        const {img_id, img_url, is_foaming} = post
        return (<div key={img_id} >
          <Card
            number={img_id} 
            key={img_id}
            src={img_url}
            status={is_foaming}
            handleButtonClick = {handleButtonClick}
          />
      </div>)
      })
    )
  }
  
  const getAllPosts = async () => {
    const res = await axios.get(`http://localhost:3001`)
    const data = res.data;
    const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
  
    // For displaying Data
    const postData = getPostData(slice)
  
    // Using Hooks to set value
    setAllPosts(postData)
    setPageCount(Math.ceil(data.length / postsPerPage))
  }
  
  useEffect(() => {
   getAllPosts()
  }, [offset, posts]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };

  const handleButtonClick = (e) => {
    let is_foaming = e.target.id
    let img_id = e.target.attributes.getNamedItem("data-id").value
    axios.put(`http://localhost:3001`,  {img_id: img_id, is_foaming: is_foaming})
  }

  const handleSelect = (e) => {
    let filterValue = e.target.value;
    setSelection(filterValue)
    setSelected(true)
  }


  return (
    < div className="App" >
      <Filter handleSelect={handleSelect}/>
      < ReactPaginate
        previousLabel={"previous" }
        nextLabel={ "next" }
        breakLabel={ "..." }
        breakClassName={ "break-me" }
        pageCount={ pageCount }
        onPageChange={ handlePageClick }
        containerClassName={ "pagination" }
        subContainerClassName={ "pages pagination" }
        activeClassName={ "active" }/>
     
      { posts }
  
      < ReactPaginate
        previousLabel={"previous" }
        nextLabel={ "next" }
        breakLabel={ "..." }
        breakClassName={ "break-me" }
        pageCount={ pageCount }
        onPageChange={ handlePageClick }
        containerClassName={ "pagination" }
        subContainerClassName={ "pages pagination" }
        activeClassName={ "active" }/>
      
      <ScrollToTop />
    </div>
  );
}

export default App;