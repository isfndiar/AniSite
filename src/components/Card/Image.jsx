export default function Image({ src, alt }) {
  return (
    <img src={src} alt={alt} className="object-cover bg-no-repeat  h-full" />
  );
}
