import { useParams, useSearchParams } from 'react-router-dom';
import './style.css'

export const Post = () => {

  const {id} = useParams();

  const [qs] = useSearchParams();
  return (
    <div>
      <h1>Isso é um Post</h1>
      {`Para:${id}`} {`Qs:${qs.get('page')}`}
    </div>);
}
