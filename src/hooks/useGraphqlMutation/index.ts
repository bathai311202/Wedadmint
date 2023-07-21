import { BaseMessage } from '@/layouts/atoms';
import { ExceptionError, IApolloErrors } from '@/types';
import { DocumentNode, TypedDocumentNode, useMutation } from '@apollo/client';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useTranslation } from '../useTranslation';

const useGraphqlMutation = (mutation: DocumentNode | TypedDocumentNode) => {
  const { t } = useTranslation('errors');
  const [isComplete, setComplete] = useState(false);

  const [mutate, { data, loading, error }] = useMutation(mutation, {
    onCompleted: () => setComplete(true),
  });
  const { showError } = BaseMessage();

  useEffect(() => {
    const errors = error as unknown as IApolloErrors;
    if (errors) {
      const code: any =
        _.get(errors, 'graphQLErrors[0].extensions.code') ||
        _.get(errors, 'networkError.result.errors[0].extensions.code');
      if (![ExceptionError.B024].includes(code)) return showError(t(code));
    }
  }, [error]);

  return {
    mutate: mutate,
    isLoading: loading,
    error: error,
    data: data,
    isComplete: isComplete,
  };
};

export default useGraphqlMutation;
