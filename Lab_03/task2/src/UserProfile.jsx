import { useEffect } from "react";
import { useState } from "react";

function UserProfile({ userId}) {
    // Task 1: Состояния для данных, загрузки и ошибок [cite: 92]
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Task 2: Использование AbortController для очитски [cite:105]
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setloading(true);
                setError(null);

                // Загрузка данных по userId[cite: 94, 116]
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                    signal: controller.signal
                });

                if (!response.ok) throw new Error('Failed to fetch user');

                const data = await response.json();
                setUser(data);
            } catch (err) {
              if (err.name !== 'AbortError') {
                setError(err.message);
              }
            } finally {
                setloading(false);
            }
        };
    
    fetchData();

    // Task 2: Функция очистки (Сleanup) [cite: 14, 106]
    return () => {
        controller.abort();
        console.log('Fetch aborted on unmount or id change');
    };
   }, [userId]); // Task 3: userId в массиве зависимостей [cite: 166]

   if (loading) return <p>Loading...</p>; // [cite: 100]
   if (error) return <p style={{color: 'red' }}>Error: {error}</p>; // [cite: 101]

   return (
    <div>
        {user && (
          <div style={{border: '1px solid blue', padding: '10px'}}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City:  {user.adress?.city}</p>
    </div>
   )}
   </div>
);
}

export default UserProfile;