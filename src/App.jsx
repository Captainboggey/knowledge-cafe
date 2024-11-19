
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);

  const handleAddToBookmark =blog=>{
   const newBookmarks =[...bookmarks,blog];
   setBookmarks(newBookmarks)
  }
  const handleMarkAsRead =(id,time)=>{
    const newReadingTime = (readingTime+time);
    setReadingTime(newReadingTime);
    console.log('remove bookmark',id)
    const remainingBookmark = bookmarks.filter(bookmark=> bookmark.id !==id) ;
    setBookmarks(remainingBookmark)
  }

  return (
    <>
    
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
     
     
     
    </>
  )
}

export default App
