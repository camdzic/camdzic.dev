import Animation from '@/components/animation';

export default function NotFound() {
  return (
    <Animation>
      <div className="text-center">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold">404</h1>
          <p className="text-xl">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved elsewhere.
          </p>
        </div>
      </div>
    </Animation>
  );
}
