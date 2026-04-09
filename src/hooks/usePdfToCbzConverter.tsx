import { useCallback, useState } from 'react';
import useFetch from './useFetch';
import { initiateDownload } from '@/utils/blob';

const usePdfToCbzConverter = () => {
  const { postWithFile } = useFetch();
  const [isLoading, setLoading] = useState(false);

  const handleFile = useCallback(
    async (file: File) => {
      try {
        setLoading(true);

        const response = await postWithFile('/pdf-to-cbz/', file);

        const blob = await response.blob();

        const filename = file.name.replace(/\.pdf$/i, '.cbz');

        initiateDownload(blob, filename);
      } catch (error) {
        console.error('Error during file conversion:', error);
      }

      setLoading(false);
    },
    [postWithFile],
  );

  return { isLoading, handleFile };
};

export default usePdfToCbzConverter;
