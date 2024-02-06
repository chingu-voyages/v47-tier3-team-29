import { Loader as LoaderIcon } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed top-0 flex justify-center items-center h-screen w-screen">
      <div className="animate-spin">
        <LoaderIcon size={35} className="text-indigo-800" />
      </div>
    </div>
  );
}
