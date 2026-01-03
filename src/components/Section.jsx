const Section = ({ id, children, background = null, style = {}, contentPosition = 'center' }) => {
  const isTop = contentPosition === 'top';

  return (
    <section
      id={id}
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: isTop ? 'flex-start' : 'center',
        overflow: 'hidden',
        isolation: 'isolate',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        ...style
      }}
    >
      {/* Background layer */}
      {background && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden'
        }}>
          {background}
        </div>
      )}

      {/* Content layer */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '1200px',
        padding: isTop ? '120px 40px' : '80px 20px'
      }}>
        {children}
      </div>
    </section>
  );
};

export default Section;
