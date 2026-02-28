import { getCommentsById } from "../utils/getData";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";
import Comment from "./Comment";

export default function CommentsList(props) {
  const id = props.id;
  const refreshComments = props.refreshComments;

  const { data, isLoading, error } = useLoadingErrorHook(getCommentsById, {
    dependencies: [id, refreshComments],
    params: id,
  });

  if (isLoading) {
    return <h1>Fetching comments! Hang tight!</h1>;
  }
  if (error) {
    return <h1>Sorry! Somethings gone awry. Please try again later.</h1>;
  }

  const { comments } = data;

  return (
    <>
      <ul className="commentTable">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <Comment data={comment} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
