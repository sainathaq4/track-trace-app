import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Button, Result } from 'antd';

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
  return (
    <Result
      status="error"
      title="Something went wrong"
      subTitle={error.message}
      extra={[
        <Button type="primary" key="retry" onClick={resetErrorBoundary}>
          Try again
        </Button>,
      ]}
    />
  );
};

export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};