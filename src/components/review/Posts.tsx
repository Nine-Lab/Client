import React, { FC, useEffect } from 'react';
import styled from "styled-components";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";


interface PostsProps{
    posts: Array<any>;
    loading: boolean;
}

const reviewStyle = {
    width: "100%",
    maxWidth: 450,
    bgcolor: "background.paper",
};

const ListStyle = styled.li`
    text-align: center;
`

const Posts: FC<PostsProps> = ({posts, loading}) => {
    useEffect(() => {
    },[posts])


    return (
        <>
            {loading && <div>loading...</div>}
            <ul>
                <List sx={reviewStyle} component="nav" aria-label="mailbox folders">
                    {posts && posts.map((post: any) => {
                        return (
                            <ul>
                                <ListStyle key={post.userId}>{post.title}:{post.content}</ListStyle>
                                <Divider/>
                            </ul>                        
                        )
                    })}
                </List>                
            </ul>
        </>
    );
};

export default Posts;