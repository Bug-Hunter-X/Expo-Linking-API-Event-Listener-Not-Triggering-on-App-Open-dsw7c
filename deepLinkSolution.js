This solution uses the `Linking.getInitialURL` async method to retrieve the initial URL when the app starts. This ensures that the URL is captured even if the app was already open.  We also use `Linking.addEventListener` for URLs sent while the app is running. 

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        setUrl(initialUrl);
      }
    };
    getInitialUrl();

    const urlListener = Linking.addEventListener('url', (event) => {
      setUrl(event.url);
    });

    return () => {
      urlListener.remove();
    };
  }, []);

  useEffect(() => {
    if (url) {
      console.log('Received URL:', url);
      // Process the URL here
    }
  }, [url]);

  // Rest of your app
}

export default App; 
```