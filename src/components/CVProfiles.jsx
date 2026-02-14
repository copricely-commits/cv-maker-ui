const CVProfiles = ({ items, columns = 2 }) => {
  const data = items || [
    {
      title: 'Portfolio Website',
      website: 'https://myportfolio.com',
      github: 'https://github.com/username/portfolio',
    },
    {
      title: 'Chat Application',
      website: 'https://chatapp.com',
      github: 'https://github.com/username/chat-app',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '14px',
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            padding: '14px 16px',
            background: '#FAFAFA',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#111827',
              marginBottom: '6px',
            }}
          >
            {item.title}
          </div>

          {/* Links */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              fontSize: '0.82rem',
            }}
          >
            {item.website && (
              <a
                href={item.website}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#2563EB',
                  textDecoration: 'none',
                }}
              >
                Website → {item.website}
              </a>
            )}

            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#6B7280',
                  textDecoration: 'none',
                }}
              >
                GitHub → {item.github}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CVProfiles;


