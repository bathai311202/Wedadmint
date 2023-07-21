import { login } from '@/graphql';
import useGraphqlMutation from '@/hooks/useGraphqlMutation';
import { ILoginProps } from '@/types';
import { setAccessToken, setRefreshToken } from '@/utils';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import _ from 'lodash';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '@/config';
const Login = () => {
  const [form] = Form.useForm();
  const { mutate } = useGraphqlMutation(login);
  const navigate = useNavigate();
  const handleLogin = async (values: ILoginProps) => {
    const { username, password } = values;
    await mutate({
      variables: {
        username,
        password,
      },
      onCompleted(data) {
        if (!data) return;
        const accessToken = _.get(data, 'loginAdmin.accessToken');
        const refreshToken = _.get(data, 'loginAdmin.refreshToken');
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        navigate(RouterPaths.home);
      },
    });
  };

  return (
    <div className={styles.wrapper}>
      <Form form={form} onFinish={handleLogin} className={styles.form}>
        <Form.Item name={'username'}>
          <Input
            className={styles.input}
            prefix={<UserOutlined className={styles.icon} />}
          />
        </Form.Item>
        <Form.Item name={'password'}>
          <Input.Password
            className={styles.input}
            prefix={<LockOutlined className={styles.icon} />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" className={styles.button}>
          Login
        </Button>
      </Form>
    </div>
  );
};
export default Login;
