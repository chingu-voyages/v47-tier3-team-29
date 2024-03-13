import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

export default async function Home() {
  return (
    <main className='p-2 m-6'>

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
      </div>

      <section className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
        <div className="border rounded-lg shadow-sm p-4">
          <h2 className="font-bold mb-4">My Projects</h2>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="due_soon">Due Soon</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="overdue">Overdue</TabsTrigger>
            </TabsList>
            <TabsContent value="due_soon">Make changes to your account here.</TabsContent>
            <TabsContent value="completed">Change your password here.</TabsContent>
            <TabsContent value="overdue">Change your password here.</TabsContent>
          </Tabs>
        </div>
        <div className="border rounded-lg shadow-sm p-4">
          <h2 className="font-bold mb-4">To Do</h2>   
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="due_soon">Due Soon</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="overdue">Overdue</TabsTrigger>
            </TabsList>
            <TabsContent value="due_soon">Make changes to your account here.</TabsContent>
            <TabsContent value="completed">Change your password here.</TabsContent>
            <TabsContent value="overdue">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </section>

    </main>
  );
}