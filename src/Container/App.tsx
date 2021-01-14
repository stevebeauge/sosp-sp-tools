import React from "react";

type AppProps = { message: string };

const App = ({ message }: AppProps) : JSX.Element => <div>{message}</div>;

export default App;