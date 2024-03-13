import Link from 'next/link';
import {
  CalendarClock,
  Calendar,
  LayoutList,
  LayoutTemplate,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Settings2,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Dashboard() {
  return (
    <main className='p-2 m-6'>
      {/* Top Nev */}
      <div className="flex justify-between items-center p-4 shadow-md">
        <span>Quick Access</span>
        <div>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700"><i className="icon-placeholder"><Settings2 /></i></button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700"><i className="icon-placeholder"><LayoutList /></i></button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700"><i className="icon-placeholder"><LayoutTemplate /></i></button>
        </div>
      </div>

      {/* Button Block */}
      <div className="grid grid-cols-2 gap-4 py-6">
        <button className="flex items-center justify-center py-4 border rounded shadow-sm" style={{ backgroundColor: '#C4B5FD' }}>
          <i className="p-1"><CalendarClock /></i>
          <span>Deadlines</span>
        </button>
        <button className="flex items-center justify-center py-6 border rounded shadow-sm" style={{ backgroundColor: '#64748B' }}>
          <i className="p-1"><LayoutDashboard color='#FFFFFF' /></i>
          <span style={{ color: '#FFFFFF' }}> Dashboard</span>
        </button>
        <button className="flex items-center justify-center py-6 border rounded shadow-sm" style={{ backgroundColor: '#CBD5E1' }}>
          <i className="p-1"><MessageSquare /></i>
          <span>Inbox</span>
        </button>
        <button className="flex items-center justify-center py-6 border rounded shadow-sm" style={{ backgroundColor: '#DDD6FE' }}>
          <i className="p-1"><LineChart /></i>
          <span>Reports</span>
        </button>
      </div>

      {/* card - 1 */}
      <div className="flex flex-col gap-4 p-4">
        <div className="border rounded shadow-sm p-4">
          <h2 className="font-bold mb-4">Priority</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded p-2">
              <h3>Exam</h3>
              <p>Scheduled</p>
              <p>25.02.2024</p>
            </div>
            <div className="border rounded p-2">
              <h3>Kick-off Meeting</h3>
              <p>Scheduled</p>
              <p>29.02.2024</p>
            </div>
          </div>
        </div>
        {/* card - 2 */}
        <div className="border rounded shadow-sm p-4">
          <h2 className="font-bold mb-4">My tasks</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded p-2">
              <h3>Management App</h3>
              <p>Deadline</p>
              <p>18.02.2024</p>
            </div>
            <div className="border rounded p-2">
              <h3>Voyage 47 Ends</h3>
              <p>Deadline</p>
              <p>25.02.2024</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex overflow-x-auto gap-4 p-4">
        <Card className='mx-2 my-7'>
          <CardContent className='p-2 m-4'>
            <div className="flex items-center justify-center py-4">
              <i className='p-2'><Calendar/></i>
              <p>Calendar</p>
            </div>
          </CardContent>
        </Card>

        <Card className='mx-2 my-7'>
          <CardContent className='p-2 m-4'>
            <div className="flex items-center justify-center py-4">
              <i className='p-2'><Calendar/></i>
              <p>Calendar</p>
            </div>
          </CardContent>
        </Card>


      </div>
    </main>
  );
}