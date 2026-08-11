import React, { Component, ReactNode } from 'react';

type Props = {
  fallback?: ReactNode;
  children: ReactNode;
};

type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#ff5555' }}>
          <h2>Something went wrong.</h2>
          <p>The 3‑D scene could not be loaded.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
