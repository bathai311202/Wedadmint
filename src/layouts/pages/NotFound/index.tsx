import { useTranslation } from '@/hooks';
import { Button } from 'antd';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return <Button type="primary">{t('notFound')}</Button>;
};

export default NotFoundPage;
