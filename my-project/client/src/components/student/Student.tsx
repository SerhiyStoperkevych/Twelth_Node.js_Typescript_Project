import React, { useState } from 'react';
import axios from 'axios';

interface Student {
    name: string;
    email: string;
    phone: string;
}

const StudentSearch: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [students, setStudents] = useState<Student[]>([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:3001/student/search', { params: { query } });
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student.name}___{student.email}___{student.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentSearch;
