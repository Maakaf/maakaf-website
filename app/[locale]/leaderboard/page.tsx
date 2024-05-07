import { Metadata } from 'next';
import useTextDirection from '@/hooks/useTextDirection';

export const metadata: Metadata = {
  title: 'לוח מובילים - Leaderboard',
  description:
    'צפו במובילי הקהילה ובתרומתם לפרויקטים בקוד פתוח. גלו את המשתמשים הפעילים ביותר ואת ההשפעה שלהם על הקהילה.',
  openGraph: {
    title: 'לוח מובילים - Leaderboard | מעקף',
    description:
      'צפו במובילי הקהילה ובתרומתם לפרויקטים בקוד פתוח. גלו את המשתמשים הפעילים ביותר ואת ההשפעה שלהם על הקהילה.',
    url: 'https://maakaf-website.vercel.app/leaderboard',
    siteName: 'Maakaf',
    type: 'website',
    images: [
      {
        url: 'https://maakaf-website.vercel.app/favicon.ico',
        width: 600,
        height: 600,
      },
    ],
  },
};

const LeaderboardPage: React.FC = () => {
  const direction = useTextDirection();

  return (
    <div dir={direction}>
      Leader Board
    </div>
  );
};

export default LeaderboardPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserForm: React.FC = () => {
//   const [users, setUsers] = useState([]);
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     // Fetch all users when the component mounts
//     axios
//       .get('/api/route')
//       .then(response => setUsers(response.data))
//       .catch(error => console.error('Error fetching users:', error));
//   }, []);

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     // Create a new user when the form is submitted
//     axios
//       .post('/api/route', { user_id: userId, password })
//       .then(response => setUsers([...users, response.data]))
//       .catch(error => console.error('Error creating user:', error));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           User ID:
//           <input
//             type="text"
//             value={userId}
//             onChange={e => setUserId(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Create User</button>
//       </form>

//       <h2>All Users</h2>
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>{user.user_id}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserForm;