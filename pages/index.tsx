import ApiForm from '@/components/ApiForm';
import Layout from 'layouts/MianLayout';
import type { NextPage } from 'next'
import { useRouter } from "next/router";
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  
  return (
    <Layout title='Api'>
      <ApiForm/>
    </Layout>
  );
};

export default Home