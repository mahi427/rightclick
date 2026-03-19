import React from 'react';
import { Link } from 'react-router-dom';

const QuickClassAccess = () => {
  const classes = ['9th', '10th', '11th', '12th'];
  const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#ef4444'];

  return (
    <div style={{ padding: '4rem 1rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            <span style={{ color: '#3b82f6' }}>Choose Your</span>{' '}
            <span style={{ color: '#ef4444' }}>Class</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#4b5563' }}>
            Access chapter-wise practice notes instantly. All materials are free!
          </p>
        </div>

        {/* Class Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {classes.map((className, index) => (
            <Link 
              key={className} 
              to={`/class/${className}/notes`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: colors[index],
                borderRadius: '1rem',
                padding: '2rem',
                color: 'white',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                  {['📘', '📗', '📙', '📕'][index]}
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  Class {className}
                </h3>
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600'
                }}>
                  View Notes →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          maxWidth: '800px',
          margin: '0 auto 3rem auto'
        }}>
          {[
            { value: '48+', label: 'Chapter Notes', color: '#3b82f6' },
            { value: 'Free', label: 'PDF Downloads', color: '#10b981' },
            { value: '24/7', label: 'Access', color: '#8b5cf6' },
            { value: '5000+', label: 'Students', color: '#ef4444' }
          ].map((stat, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: stat.color, marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{ color: '#4b5563' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="/class/9th/notes"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #3b82f6, #ef4444)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '9999px',
              fontWeight: 'bold',
              fontSize: '1.125rem',
              textDecoration: 'none',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
            }}
          >
            Start Learning Now →
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickClassAccess;