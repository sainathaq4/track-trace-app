import { Result, Button } from 'antd';
import { FallbackProps } from 'react-error-boundary';
import { getErrorMessage } from './utils';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = getErrorMessage(error);
  
  return (
    <Result
      status="error"
      title="Something went wrong"
      subTitle={message}
      extra={[
        <Button 
          key="retry" 
          type="primary" 
          onClick={resetErrorBoundary}
        >
          Try Again
        </Button>
      ]}
    />
  );
}