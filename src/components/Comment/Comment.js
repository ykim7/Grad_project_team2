import "./Comment.css";
import { useSelector } from "react-redux";

const Comment = ({ comment, handleCommentDelete }) => {
  const user = useSelector((state) => state.auth.user);

  const handleDeleteClick = () => {
    handleCommentDelete(comment);
  };
  return (
    <>
      <div className="flex justify-between items-center custom-comment-css bg-bg-color">
        <div>
          <span className="font-bold">{comment.firstName}:</span>
          <p className="">{comment.content}</p>
        </div>
        {user && comment.user_id === user.id && (
          <div className="text-sm bg-red-500 p-2 rounded-xl">
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Comment;
