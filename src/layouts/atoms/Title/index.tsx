import { Typography } from 'antd';
import { TitleProps } from 'antd/lib/typography/Title';
const { Title } = Typography;

const BaseTitle = ({ children, ...props }: TitleProps) => {
  return <Title {...props}>{children}</Title>;
};

export default BaseTitle;
