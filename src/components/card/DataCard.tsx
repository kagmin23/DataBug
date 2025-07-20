import {
    Avatar,
    Chip,
    Paper,
    Typography
} from '@mui/material';
import {
    Calendar,
    Globe,
    ShoppingBag,
    Store
} from 'lucide-react';
import React from 'react';
import type { DataCardProps, WebType } from '../../types';

const DataCard: React.FC<DataCardProps> = ({ item }) => {
  const getWebTypeIcon = (type: WebType) => {
    switch (type) {
      case 'shopee':
        return <ShoppingBag className="w-5 h-5" />;
      case 'tiki':
        return <Store className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const getWebTypeColor = (type: WebType) => {
    switch (type) {
      case 'shopee':
        return 'error' as const;
      case 'tiki':
        return 'info' as const;
      default:
        return 'default' as const;
    }
  };

  const getWebTypeName = (type: WebType) => {
    switch (type) {
      case 'shopee':
        return 'Shopee';
      case 'tiki':
        return 'Tiki';
      default:
        return 'Web thường';
    }
  };

  return (
    <Paper className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <Avatar className="w-10 h-10 bg-blue-100">
          {getWebTypeIcon(item.webType)}
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Chip 
              label={getWebTypeName(item.webType)}
              color={getWebTypeColor(item.webType)}
              size="small"
            />
            <Chip 
              label={item.status}
              color={item.status === 'success' ? 'success' : 'default'}
              size="small"
              variant="outlined"
            />
          </div>
          
          <Typography variant="h6" className="font-semibold mb-1 line-clamp-1">
            {item.title}
          </Typography>
          
          <Typography variant="body2" className="text-gray-600 mb-2 line-clamp-2">
            {item.description}
          </Typography>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <Typography variant="caption" className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {item.timestamp}
            </Typography>
            
            <div className="flex items-center gap-4">
              {item.price && (
                <Typography variant="body2" className="font-bold text-red-600">
                  {item.price}
                </Typography>
              )}
              
              {item.rating && (
                <Typography variant="caption" className="flex items-center gap-1">
                  ⭐ {item.rating}
                </Typography>
              )}
            </div>
          </div>
          
          <Typography variant="caption" className="text-blue-600 truncate block mt-1">
            {item.url}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default DataCard;