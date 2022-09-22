import { Link, useParams } from 'react-router-dom'
const TrailerDesc = ({movies}) => {
 const {title} = useParams()


const handleTrailer=()=>{
    for(let i of movies){
        if (title === i.title)
            return i
    }
}
  return (
<div class="container">
  <ul class="pagination mt-2">
    <li class="page-item">
        <Link to='/' class="page-link" >Home</Link>
    </li>
  </ul>
    <div class="embed-responsive embed-responsive-4by3">
        <h1>{title}</h1>
        <iframe width="600" height="500" src={handleTrailer().trailer} title="YouTube" ></iframe>
        <h5>{handleTrailer().description}</h5>

    </div>
</div>
  )}

export default TrailerDesc