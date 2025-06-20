// src/pages/ClassesPage.jsx
import { useEffect, useState } from 'react';
import { getAllClasses } from '../../services/api';
import ClassCard from '../components/ClassCard';

function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getAllClasses()
      .then(res => setClasses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Japanese Classes</h2>
      {classes.length === 0 ? (
        <p>No classes available.</p>
      ) : (
        classes.map(item => <ClassCard key={item._id} item={item} />)
      )}
    </div>
  );
}

export default ClassesPage;
