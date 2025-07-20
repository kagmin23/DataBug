import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import FetchForm from './components/input/FetchForm';
import DataList from './components/results/DataList';
import type { WebType } from './types';
import { generateFakeData, getInitialData } from './utils/fakeData';

const App: React.FC = () => {
  const [scrapedData, setScrapedData] = useState(getInitialData());
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async (url: string, webType: WebType) => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const newData = generateFakeData(url, webType);
      setScrapedData(prev => [newData, ...prev]);
      setIsLoading(false);
    }, 2000);
  };

  const handleClearData = () => {
    setScrapedData([]);
  };

  return (
    <Box sx={{ flexGrow: 1, pt: 3 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            DataBug Scraper Demo
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Công cụ cào dữ liệu website đơn giản
          </Typography>
        </Box>

        {/* Form Panel - Full Width */}
        <Box sx={{ mb: 4 }}>
          <FetchForm
            onFetch={handleFetch}
            isLoading={isLoading}
          />
        </Box>

        {/* Data List Panel - Full Width */}
        <Box>
          <DataList
            data={scrapedData}
            onClear={handleClearData}
            isLoading={isLoading}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default App;