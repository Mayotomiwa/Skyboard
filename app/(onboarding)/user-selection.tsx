import UserSelection from '@/components/OnboardingComponents/UserSelection';
import React, { useEffect } from 'react';
import { LogBox, Text, View } from 'react-native';

// Disable specific warnings if needed
LogBox.ignoreLogs(['Warning: ...']); // Add specific warnings if needed

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('Static error handler:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to console in production
    console.error('Component error:', error);
    console.error('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1624' }}>
          <Text style={{ color: 'white' }}>
            {this.state.error?.message || 'An error occurred'}
          </Text>
        </View>
      );
    }
    return this.props.children;
  }
}

export default function WrappedUserSelection() {
  useEffect(() => {
    console.log('WrappedUserSelection mounted');
    return () => console.log('WrappedUserSelection unmounted');
  }, []);

  return (
    <ErrorBoundary>
      <View style={{ flex: 1, backgroundColor: '#1a1624' }}>
        <UserSelection />
      </View>
    </ErrorBoundary>
  );
}
