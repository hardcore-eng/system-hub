import { useEffect, useState } from "react";

export default function Home() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("/api/sheet")
      .then(res => res.json())
      .then(data => setRows(data.data || []));
  }, []);

  return (
    <div>
      <h1>Google Sheet Data</h1>
      <pre>{JSON.stringify(rows, null, 2)}</pre>
    </div>
  );
}
