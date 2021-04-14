const PostFull = ( {match}) => {
  return ( 
    <h1>
      PostFull # {match.params.id}
    </h1>
   );
}
 
export default PostFull;