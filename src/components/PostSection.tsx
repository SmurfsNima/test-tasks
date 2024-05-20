import { Comment } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

interface Comment {
  text: string;
  email: string;

 
}
interface PostsectionProps {
  post: {
    title: string;
    description: string;
    comments: Comment[];
  };
}
export const PostSection = ({ post }: PostsectionProps) => {
  const { title, description } = post;
  const [comments, setComments] = useState(post.comments);
  const [isLiked , setIsliked] = useState(false)
  const handleDeleteCommnet = (index: number, email: string) => {
    if (comments[index].email === email) {
      const newComments = comments.filter((_, i) => i !== index);
      setComments(newComments);
    }
  };

  return (
    <div className="px-6 py-3 flex flex-col shadow-lg  bg-gray-100 rounded-lg">
      <div className="py-2 px-4 flex flex-col border-b border-black ">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      <ul className="flex flex-col gap-5 py-6">
        {comments.map((comment, index) => (
          <li key={index} className="flex flex-col gap-2">
            <p className="text-[14px] text-gray-400">{comment.email}</p>
            <div className="flex justify-between">
              <p className="text-[18px] font-semibold">{comment.text}</p>
              <div className="flex gap-1 items-center">
                <div onClick={()=>setIsliked(!isLiked) }><FavoriteIcon  style={{color: isLiked ? 'red' : 'gray'}}/></div>
                
                <div onClick={() => handleDeleteCommnet(index, comment.email)}>
                  <DeleteIcon  />
                
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
};
