import CommentsFull from "./CommetnsFull/CommentsFull"
import CommentsList from "./CommentsList/CommentsList"
import  { Route } from "react-router"

const Comments = ( {match}) => {
  

  return ( 
    <div>
     <CommentsList/>
     
     <Route path = "/comments/:id"  component = {CommentsFull} />
   
    </div>
   );s
}
 
export default Comments;