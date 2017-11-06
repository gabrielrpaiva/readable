
/**
 * Merge funcions allowing multiples reducers to share the same state
 */
export default function reduceReducers(...reducers) {
    return (previous, current) => reducers.reduce((p, r) => r(p, current), previous);
  }
   