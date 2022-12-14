import { useContext } from "react";

import { Typography, Box, styled, CardHeader,Avatar, IconButton } from "@mui/material";
import { Delete } from '@mui/icons-material';

import { API } from '../api/api';
import { DataContext } from "../context/DataProvider";
import Replays from "./Replays";
const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {
   

    const { user } = useContext(DataContext)
    
    const removeComment = async () => {
       await API.deleteComment(comment._id);
      
       
    }

    return (
        <Component>
            <Container>
            <CardHeader
          avatar={<Avatar sx={{ bgcolor: "white" }} aria-label="recipe"
          src= {comment.commentBy.image}  />
              
         } 
          title={comment.commentBy.username}
          subheader={new Date(comment.createdAt).toDateString()} />
          
                { comment.commentBy._id === user.id &&
                <IconButton>
                     <DeleteIcon onClick={() => removeComment()} /> 

                </IconButton>
}
            </Container>
            <Typography variant="body1" sx={{marginLeft:10,marginTop:0}}>{comment.comments}</Typography>
            <Box sx={{ marginLeft:10}}>
            <Replays comment={comment}/>

            </Box>
         
        </Component>
        
    )
}

export default Comment;