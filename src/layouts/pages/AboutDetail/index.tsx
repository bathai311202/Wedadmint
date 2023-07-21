import { useParams } from 'react-router-dom';

const AboutPageDetail = () => {
  const { id } = useParams();
  return <div>About Page {id}</div>;
};

export default AboutPageDetail;
