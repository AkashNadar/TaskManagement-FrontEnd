import { useEffect, useState } from 'react';
import axios from 'axios';

interface DataItem {
    id: number;
    name: string;
}

const List: React.FC = () => {

    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const GENERIC_ERROR_MESSAGE = 'An unknown error occurred';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<DataItem[]>(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/data');
                setData(response.data);
                console.log(response.data)
            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    setError(error.message);
                } else if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError(GENERIC_ERROR_MESSAGE);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <main>
            <div>
                <h1>Data List</h1>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default List;

