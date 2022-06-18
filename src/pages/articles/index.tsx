import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Articles = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);

  return <p>Loading...</p>;
};

export default Articles;
