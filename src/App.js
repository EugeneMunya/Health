import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <BrowserRouter>
    <ChakraProvider>
    <Layout/>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
