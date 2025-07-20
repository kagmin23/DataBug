import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import {
    Globe,
    LinkIcon,
    ShoppingBag,
    Store
} from 'lucide-react';
import React, { useState } from 'react';
import type { FetchFormProps, WebType } from '../../types';

const FetchForm: React.FC<FetchFormProps> = ({ onFetch, isLoading }) => {
  const [url, setUrl] = useState("");
  const [webType, setWebType] = useState<WebType>("normal");

  const handleFetch = () => {
    if (!url.trim()) {
      alert("Vui lòng nhập URL");
      return;
    }
    onFetch(url, webType);
    setUrl("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleFetch();
    }
  };

  return (
    <Card className="sticky top-4">
      <CardContent className="p-6">
        <Typography variant="h6" className="mb-4 flex items-center gap-2">
          <LinkIcon className="w-5 h-5" />
          Thông tin cào dữ liệu
        </Typography>
        
        <div className="space-y-4">
          <TextField
            label="Nhập URL website"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="https://example.com"
            helperText="Nhập URL đầy đủ bao gồm https://"
            disabled={isLoading}
          />
          
          <FormControl fullWidth>
            <InputLabel>Chọn loại website</InputLabel>
            <Select
              value={webType}
              label="Chọn loại website"
              onChange={(e) => setWebType(e.target.value as WebType)}
              disabled={isLoading}
            >
              <MenuItem value="normal">
                <Box className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Web thường
                </Box>
              </MenuItem>
              <MenuItem value="shopee">
                <Box className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Shopee
                </Box>
              </MenuItem>
              <MenuItem value="tiki">
                <Box className="flex items-center gap-2">
                  <Store className="w-4 h-4" />
                  Tiki
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
          
          <Button 
            variant="contained" 
            fullWidth 
            onClick={handleFetch}
            disabled={isLoading || !url.trim()}
            size="large"
            className="h-12"
          >
            {isLoading ? 'Đang lấy dữ liệu...' : 'Lấy dữ liệu'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FetchForm;