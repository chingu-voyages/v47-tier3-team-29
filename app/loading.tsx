import { Loader as LoaderIcon } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">
        <LoaderIcon />
      </div>
    </div>
  )
}
