import FolderService from '@/api/services/FolderService';
import Layout from 'layouts/MianLayout'
import React from 'react'
import { useEffect } from 'react';


const Path = () => {
  useEffect(() => {
    FolderService.fetchData("")
  
  }, [])
  
  return (
    <Layout>[path]</Layout>
  )
}

export default Path