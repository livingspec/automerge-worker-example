import {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    new Worker(new URL('../worker/worker.ts', import.meta.url));
  }, []);

  return <div>test</div>;
}
