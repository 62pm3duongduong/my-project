import React from "react";

const App = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return <Component {...pageProps} />;
};

export default App;
