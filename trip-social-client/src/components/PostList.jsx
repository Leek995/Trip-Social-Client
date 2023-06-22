import {Post} from "./Post";

export const PostList = ({posts}) => {
    return (
        <>

            {
                posts.map((post, idx) => {
                    return(
                        <Post post={post} key={idx}/>
                    );
                })
            }



        </>
    );
}