import { Link } from 'react-router-dom';

const BaseLink = ({ ...props }) => {
  const { children } = props.children.props;

  return <Link to={props.href}>{children}</Link>;
};

export default BaseLink;
