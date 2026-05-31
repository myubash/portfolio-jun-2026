export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated blobs */}
      <div
        className="absolute rounded-full opacity-35 animate-blob-1"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, #3B82F6, transparent 70%)',
          filter: 'blur(80px)',
          top: -100,
          left: -100,
        }}
      />
      <div
        className="absolute rounded-full opacity-35 animate-blob-2"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, #6366F1, transparent 70%)',
          filter: 'blur(80px)',
          top: '40%',
          right: -80,
        }}
      />
      <div
        className="absolute rounded-full opacity-35 animate-blob-3"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, #10B981, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '10%',
          left: '30%',
        }}
      />
    </div>
  )
}
