import { useEffect, useState } from 'react';
import { Brain, Sparkles } from 'lucide-react';

const LoadingPopup = ({ isVisible, message = "AI is generating your CV..." }) => {
  const [dots, setDots] = useState('');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        delay: i * 0.15,
      }));
      setParticles(newParticles);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* KEYFRAMES */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%,100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes bounce {
          0%,100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        `}
      </style>

      {/* OVERLAY */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(6px)',
          animation: 'fadeIn 0.3s ease',
        }}
      >
        {/* BOX */}
        <div
          style={{
            position: 'relative',
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
            padding: '32px',
            maxWidth: '400px',
            width: '100%',
            margin: '0 16px',
            animation: 'scaleIn 0.3s ease',
            overflow: 'hidden',
          }}
        >
          {/* BACKGROUND GRADIENT */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom right,#eff6ff,#f3e8ff)',
              borderRadius: '16px',
              opacity: 0.5,
            }}
          />

          {/* CONTENT */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              {/* ICON AREA */}
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to right,#60a5fa,#a855f7)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite',
                    filter: 'blur(20px)',
                    opacity: 0.5,
                  }}
                />

                <div
                  style={{
                    position: 'relative',
                    background:
                      'linear-gradient(to right,#3b82f6,#9333ea)',
                    borderRadius: '50%',
                    padding: '24px',
                    animation: 'float 3s ease-in-out infinite',
                  }}
                >
                  <Brain
                    style={{
                      width: '48px',
                      height: '48px',
                      color: '#fff',
                      animation: 'pulse 2s infinite',
                    }}
                  />
                </div>

                {/* PARTICLES */}
                {particles.map(particle => (
                  <div
                    key={particle.id}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      animation: `orbit 3s linear infinite`,
                      animationDelay: `${particle.delay}s`,
                    }}
                  >
                    <Sparkles
                      style={{
                        width: '16px',
                        height: '16px',
                        color: '#facc15',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* TEXT */}
              <div style={{ textAlign: 'center' }}>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    background:
                      'linear-gradient(to right,#2563eb,#9333ea)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {message}{dots}
                </h3>

                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '14px',
                    marginTop: '8px',
                  }}
                >
                  Please wait while I process your request
                </p>
              </div>

              {/* PROGRESS BAR */}
              <div
                style={{
                  width: '100%',
                  background: '#e5e7eb',
                  borderRadius: '999px',
                  height: '8px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    background:
                      'linear-gradient(to right,#3b82f6,#9333ea)',
                    borderRadius: '999px',
                    animation: 'progress 2s linear infinite',
                  }}
                />
              </div>

              {/* BOUNCE DOTS */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    style={{
                      width: '12px',
                      height: '12px',
                      background:
                        'linear-gradient(to right,#3b82f6,#9333ea)',
                      borderRadius: '50%',
                      animation: 'bounce 1s infinite',
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPopup;
