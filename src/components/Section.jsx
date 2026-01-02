const Section = ({ id, children, background = null, style = {} }) => {
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
        justifyContent: 'center',
        overflow: 'hidden',
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
          zIndex: 0
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
        padding: '80px 20px'
      }}>
        {children}
      </div>
    </section>
  );
};

export default Section;
