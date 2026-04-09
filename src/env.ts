const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  apiSecretKey: process.env.NEXT_PUBLIC_API_SECRET_KEY || '',
};

// Log environment variables in development (only runs once)
if (process.env.NODE_ENV === 'development') {
  console.log('Environment variables loaded:', {
    apiBaseUrl: env.apiBaseUrl,
    apiSecretKeySet: !!env.apiSecretKey,
  });
}

export default env;
