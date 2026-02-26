import { getCommentsById } from "../utils/getData";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";

export default function CommentsList(props) {
  const id = props.id;

  const { data, isLoading, error } = useLoadingErrorHook(getCommentsById, {
    dependencies: [id],
    params: id,
  });

  if (isLoading) {
    return <h1>Fetching comments! Hang tight!</h1>;
  }
  if (error) {
    return <h1>Sorry! Somethings gone awry. Please try again later.</h1>;
  }

  console.log(data);
  const { comments } = data;
  console.log(comments);

  return (
    <>
      <ul></ul>
    </>
  );
}
