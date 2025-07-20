import type { ScrapedData, WebType } from "../types";

const fakeDataTemplates = {
  shopee: [
    {
      title: 'iPhone 15 Pro Max 256GB - Chính hãng VN/A',
      description: 'iPhone 15 Pro Max với chip A17 Pro, camera 48MP, màn hình Super Retina XDR 6.7 inch',
      price: '28.990.000đ',
      rating: 4.8
    },
    {
      title: 'Áo thun nam cotton cao cấp',
      description: 'Áo thun nam 100% cotton, form regular, nhiều màu sắc',
      price: '159.000đ',
      rating: 4.5
    },
    {
      title: 'Giày sneaker nữ thời trang',
      description: 'Giày sneaker nữ da PU cao cấp, đế cao su non',
      price: '299.000đ',
      rating: 4.6
    },
    {
      title: 'Tai nghe Bluetooth AirPods Pro 2',
      description: 'Tai nghe không dây với chống ồn chủ động, âm thanh spatial',
      price: '6.990.000đ',
      rating: 4.7
    }
  ],
  tiki: [
    {
      title: 'Samsung Galaxy S24 Ultra 512GB',
      description: 'Samsung Galaxy S24 Ultra với S Pen, camera 200MP, màn hình Dynamic AMOLED 6.8 inch',
      price: '32.990.000đ',
      rating: 4.7
    },
    {
      title: 'Sách "Đắc Nhân Tâm" - Dale Carnegie',
      description: 'Cuốn sách kinh điển về nghệ thuật giao tiếp và ứng xử',
      price: '79.000đ',
      rating: 4.9
    },
    {
      title: 'Laptop Gaming ASUS ROG',
      description: 'Laptop gaming ASUS ROG với chip Intel Core i7, RTX 4060',
      price: '25.990.000đ',
      rating: 4.7
    },
    {
      title: 'Máy lọc không khí Xiaomi',
      description: 'Máy lọc không khí thông minh với HEPA filter, điều khiển qua app',
      price: '2.490.000đ',
      rating: 4.6
    }
  ],
  normal: [
    {
      title: 'Tin tức công nghệ mới nhất - VnExpress',
      description: 'Cập nhật những tin tức công nghệ nóng hổi, đánh giá sản phẩm, hướng dẫn sử dụng'
    },
    {
      title: 'Bài viết về AI và Machine Learning',
      description: 'Khám phá xu hướng phát triển của trí tuệ nhân tạo trong tương lai'
    },
    {
      title: 'Hướng dẫn lập trình React',
      description: 'Tutorial chi tiết về React hooks và best practices'
    },
    {
      title: 'Tin tức thế giới - BBC News',
      description: 'Cập nhật tin tức thế giới, chính trị, kinh tế, xã hội mới nhất'
    }
  ]
};

export const generateFakeData = (url: string, webType: WebType): ScrapedData => {
  const templates = fakeDataTemplates[webType];
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  
  return {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    url,
    webType,
    ...randomTemplate,
    timestamp: new Date().toLocaleString('vi-VN'),
    status: 'success'
  };
};

export const getInitialData = (): ScrapedData[] => [
  {
    id: '1',
    url: 'https://shopee.vn/product/123',
    webType: 'shopee',
    title: 'iPhone 15 Pro Max 256GB - Chính hãng VN/A',
    description: 'iPhone 15 Pro Max với chip A17 Pro, camera 48MP, màn hình Super Retina XDR 6.7 inch',
    price: '28.990.000đ',
    rating: 4.8,
    timestamp: '2025-07-20 14:30',
    status: 'success'
  },
  {
    id: '2',
    url: 'https://tiki.vn/product/456',
    webType: 'tiki',
    title: 'Samsung Galaxy S24 Ultra 512GB',
    description: 'Samsung Galaxy S24 Ultra với S Pen, camera 200MP, màn hình Dynamic AMOLED 6.8 inch',
    price: '32.990.000đ',
    rating: 4.7,
    timestamp: '2025-07-20 14:25',
    status: 'success'
  },
  {
    id: '3',
    url: 'https://vnexpress.net/tech/news',
    webType: 'normal',
    title: 'Tin tức công nghệ mới nhất - VnExpress',
    description: 'Cập nhật những tin tức công nghệ nóng hổi, đánh giá sản phẩm, hướng dẫn sử dụng',
    timestamp: '2025-07-20 14:20',
    status: 'success'
  }
];