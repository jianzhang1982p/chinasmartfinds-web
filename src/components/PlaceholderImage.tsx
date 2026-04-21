interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export default function PlaceholderImage({
  width = 800,
  height = 600,
  text = "Product Image",
  className = ""
}: PlaceholderImageProps) {
  return (
    <div 
      className={`bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl flex flex-col items-center justify-center ${className}`}
      style={{ width: '100%', aspectRatio: `${width}/${height}` }}
    >
      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-gray-500 font-medium text-lg">{text}</span>
      <span className="text-gray-400 text-sm mt-1">{width} x {height}px</span>
    </div>
  );
}
