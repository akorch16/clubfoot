import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="px-4 py-12 text-center space-y-3">
          <p className="text-slate-700 font-semibold">Something went wrong loading this page.</p>
          <p className="text-xs text-slate-400 font-mono break-all">
            {this.state.error?.message ?? String(this.state.error)}
          </p>
          <button
            onClick={() => this.setState({ error: null })}
            className="mt-2 px-4 py-2 rounded-xl bg-violet-500 text-white text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
