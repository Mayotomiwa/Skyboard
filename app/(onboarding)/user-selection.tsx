import UserSelection from '@/components/OnboardingComponents/UserSelection';
import ErrorBoundary from 'react-native-error-boundary';

export default function WrappedUserSelection() {
  return (
    <ErrorBoundary onError={(error) => console.log(error)}>
      <UserSelection />
    </ErrorBoundary>
  );
}