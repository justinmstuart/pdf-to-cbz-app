import env from '../env';

const useFetch = () => {
  const postWithFile = async (url: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${env.apiBaseUrl}${url}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.apiSecretKey}`,
        },
        body: formData,
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      console.error('Error in postWithFile:', error);
      throw error;
    }
  };

  return { postWithFile };
};

export default useFetch;
