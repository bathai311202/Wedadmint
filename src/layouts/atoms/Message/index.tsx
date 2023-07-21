import { message } from 'antd';
import { useCallback } from 'react';

const BaseMessage = () => {
  message.config({
    duration: 2,
  });
  const showError = useCallback((text: string) => {
    message.error({
      content: text,
    });
  }, []);
  const showSuccess = useCallback((text: string) => {
    message.success({
      content: text,
    });
  }, []);
  const showInfo = useCallback((text: string) => {
    message.info({
      content: text,
    });
  }, []);
  const showWarning = useCallback((text: string) => {
    message.warning({
      content: text,
    });
  }, []);

  return { showError, showSuccess, showInfo, showWarning };
};

export default BaseMessage;
