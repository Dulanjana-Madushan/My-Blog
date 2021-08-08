import { Link } from 'react-router-dom';

function Post({data}) {
    return (
        <div className="posts-tile">
            <div className="top">
                <img src="https://picsum.photos/200/100" alt="image"></img>
            </div>
            <div className="title">
                <span>{data.title}</span>
            </div>
            <div className="writer">
                <span>By : {data.userId}</span>
            </div>

            <Link to={`/posts/${data.id}`}>
                <button>Read More</button>
            </Link>
            
        </div>
    );
}

export default Post
