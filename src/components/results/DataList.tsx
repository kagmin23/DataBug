import { TrendingUp } from '@mui/icons-material';
import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Paper,
    Typography
} from '@mui/material';
import React from 'react';
import type { DataListProps } from '../../types';
import DataCard from '../card/DataCard';

const DataList: React.FC<DataListProps> = ({ data, onClear, isLoading }) => {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <Typography variant="h6" className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Dữ liệu đã cào ({data.length})
                    </Typography>

                    <Button
                        variant="outlined"
                        size="small"
                        onClick={onClear}
                        disabled={data.length === 0}
                        color="error"
                    >
                        Xóa tất cả
                    </Button>
                </div>
                <div>
                    {data.length > 0 && (
                        <Box className="mt-2 border-t border-gray-200">
                            <Typography variant="caption" className="text-gray-500 text-center block">
                                Hiển thị {data.length} kết quả
                            </Typography>
                        </Box>
                    )}
                </div>
                {isLoading && (
                    <Alert severity="info" className="mb-4">
                        Đang xử lý yêu cầu cào dữ liệu...
                    </Alert>
                )}

                {data.length === 0 && !isLoading ? (
                    <Paper className="p-8 text-center bg-gray-50">
                        <Typography variant="h6" className="text-gray-500 mb-2">
                            Chưa có dữ liệu nào
                        </Typography>
                        <Typography variant="body2" className="text-gray-400">
                            Nhập URL và nhấn "Lấy dữ liệu" để bắt đầu
                        </Typography>
                    </Paper>
                ) : (
                    <>
                        <Divider className="mb-4" />
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                            {data.map((item) => (
                                <DataCard key={item.id} item={item} />
                            ))}
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default DataList;