import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 rounded-lg  pt-4">
            <div className="bg-purple-600 p-4 rounded-lg">
                <h3 className="text-4xl text-center"> Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center mt-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;