import React, { FC, useEffect } from 'react';


interface PostsProps{
    posts: Array<any>;
    loading: boolean;
}

const Posts: FC<PostsProps> = ({posts, loading}) => {
    useEffect(() => {
        console.log(posts)
    },[posts])



    return (
        <>
            {loading && <div>loading...</div>}
            <ul>
                {posts && posts.map((post: any) => {
                    return <li key={post._id}>{post.content}</li>
                })}
            </ul>
        </>
    );
};

export default Posts;