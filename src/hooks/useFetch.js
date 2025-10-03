import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]); // mặc định lúc đầu rỗng
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);  // chạy loading khi thay đổi url 
    setError(null);    // reset
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
