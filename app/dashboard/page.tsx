import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/')
  }

  return <div>Dashboard</div>
}
