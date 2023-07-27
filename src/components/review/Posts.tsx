import React, { FC, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Loading from "components/common/Loading";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

interface PostsProps {
    posts: Array<any>;
    loading: boolean;
}

const Posts: FC<PostsProps> = ({ posts, loading }) => {
    useEffect(() => {}, [posts]);

    return (
        <>
            {loading && (
                <Stack spacing={3}>
                    <Skeleton variant="rounded" width={210} height={60} />
                </Stack>
            )}
            <List component="nav" aria-label="mailbox folders">
                {posts &&
                    posts.map((post: any) => {
                        return (
                            <div>
                                <ListItem key={post._id}>
                                    <ListItemText
                                        primary={post.title}
                                        secondary={`${post.content} 점수: ${post.satisfactionLevel}`}
                                    ></ListItemText>
                                </ListItem>
                                <Divider />
                            </div>
                        );
                    })}
            </List>
        </>
    );
};

export default Posts;
