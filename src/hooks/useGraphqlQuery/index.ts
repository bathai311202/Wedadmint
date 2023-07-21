import { BaseMessage } from '@/layouts/atoms';
import { ExceptionError, IApolloErrors } from '@/types';
import { DocumentNode, TypedDocumentNode, useQuery } from '@apollo/client';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useTranslation } from '../useTranslation';
const useGraphqlQuery = (
  query: DocumentNode | TypedDocumentNode,
  variables?: { [key: string]: any },
) => {
  const { t } = useTranslation('errors');
  const [isComplete, setComplete] = useState(false);
  const { data, loading, error, refetch } = useQuery(query, {
    errorPolicy: 'all',
    onCompleted: () => setComplete(true),
    variables: { ...variables },
  });
  const { showError } = BaseMessage();

  useEffect(() => {
    const errors = error as unknown as IApolloErrors;
    if (errors) {
      const code: any =
        _.get(errors, 'graphQLErrors[0].extensions.code') ||
        _.get(errors, 'networkError.result.errors[0].extensions.code');
      if (![ExceptionError.A000].includes(code)) return showError(t(code));
    }
  }, [error]);

  return {
    isLoading: loading,
    error,
    data,
    isComplete,
    refetch,
  };
};

export default useGraphqlQuery;
