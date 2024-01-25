import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
}

const fetchData = async (start: number, limit: number): Promise<Item[]> => {
  // Здесь можно добавить логику для получения данных с сервера
  // Например, использовать fetch или axios для выполнения HTTP-запроса
  // В данном примере просто генерируем случайные данные
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: Item[] = [];
      for (let i = start; i < start + limit; i++) {
        data.push({ id: i, name: `Item ${i}` });
      }
      resolve(data);
    }, 500);
  });
};

const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [start, setStart] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    const loadMoreItems = async () => {
      if (isLoading) return;
      setIsLoading(true);

      const newItems = await fetchData(start, limit);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setStart((prevStart) => prevStart + limit);
      setIsLoading(false);
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, start, limit]);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;