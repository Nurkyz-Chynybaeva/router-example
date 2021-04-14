import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PostList = () => {
  
const results = [];
for (let id = 0; id <= 10; id++) {
results.push (<li>
  <Link to ={"/posts/"  + id} >Post number # {id}</Link>
</li>)
}

  return ( <ul>{results}</ul> );
}
 
export default PostList;