// src/components/ClassCard.jsx

function ClassCard({ item }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{item.level}</h3>
      <p>{item.description}</p>
      <p><strong>Schedule:</strong> {item.schedule}</p>
      <p><strong>Fee:</strong> Rs. {item.fee}</p>
    </div>
  );
}

export default ClassCard;
