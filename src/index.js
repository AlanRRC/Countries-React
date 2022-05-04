import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import 'mvp.css'

(async function () {
  // Fetch API data on world countries.
  const url =
    "https://gist.githubusercontent.com/stungeye/e34eee4f6665a077d320e15e2910b97a/raw/841669883105d05ce8536cfa37ca8518205cdd83/countriesv3_1_filtered.json";
  const apiResponse = await fetch(url);

  // Parse response JSON into an array.
  const countries = await apiResponse.json();

  // Render the App component to the div#root in markup.
  const container = document.getElementById("app");
  const root = createRoot(container);
  root.render(<App countries={countries} />);
})();
