import { useEffect, useState } from 'react';
import { apiHN } from '../types';

const baseUrl = 'https://hn.algolia.com/api/v1/';

/*
Angular:  search_by_date?query=angular&page=0
React:    search_by_date?query=reactjs&page=0
Vuejs:    search_by_date?query=vuejs&page=0
*/

const usePosts = (option: string) => {
  const [posts, setPosts] = useState<apiHN>();
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      const query = `search_by_date?query=${option}&page=0`;
      setLoading(true);
      const response = await fetch(baseUrl+query);
      const json = await response.json();
      setLoading(false);
      setPosts(json);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    (option !== '') ? fetchPosts() : null;
  }, [option]);

  return { posts, loading, refetch: fetchPosts };
};

export default usePosts;
