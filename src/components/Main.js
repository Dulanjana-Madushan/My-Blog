import Post from './Post'
import useFetch from './useFetch';

function Main() {
    const { data: posts } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	console.log(posts);

    return (
        <div className="posts-list">
            <div className="posts-container">
                {posts ? (
					posts.map((post) => <Post data={post} key={post.id} />)
				) : (
					<p>Loading..</p>
				)}
            </div>
        </div>
    )
}

export default Main
