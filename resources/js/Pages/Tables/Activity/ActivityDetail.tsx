import Breadcrumbs from '@/Components/Breadcrumb';
import { Heading } from '@/Components/Heading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/Components/ui/card';
import { ScrollArea } from '@/Components/ui/scroll-area';
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Activity, PageProps } from '@/types'
import { useEffect } from 'react'

const breadcrumbItems = [{ label: 'Dashboard', href: '/dashboard' }, { label: 'Activity', href: '/dashboard/activity' }, { label: 'Detail' }]

const DashboardActivityDetail = ({ auth, activity }: PageProps<{ activity: Activity[] }>) => {
  const data = activity[0]

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <DashboardLayout user={auth.user}>
      <ScrollArea className='h-full'>
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">

          <Breadcrumbs items={breadcrumbItems} />
          <Heading title="Detail Aktivitas" description="Informasi detail aktivitas." />

          <div className="w-full mx-auto mt-6">
            {/* Card Container */}
            <Card>
              {/* Card Header */}
              <CardHeader>
                {/* Banner Image */}
                <img
                  src={`/images/${data.banner}`}
                  alt={data.title}
                  className="object-cover w-full h-48 mb-4 rounded-lg"
                />
                <CardTitle className='text-primary text-2xl font-bold'>{data.title}</CardTitle>
                <CardDescription className="text-sm text-pretty">
                  Published by: {data.publised_name} | Location: {data.location}
                </CardDescription>
              </CardHeader>

              {/* Card Content */}
              <CardContent>
                {/* Categories */}
                <p className="text-sm mb-4">
                  <strong>Categories:</strong> {JSON.parse(data.category).join(', ')}
                </p>

                {/* Schedule */}
                <p className="text-sm mb-4">
                  <strong>Schedule:</strong> {new Date(data.schedule).toLocaleString()}
                </p>

                {/* Deadline */}
                <p className="text-sm mb-4">
                  <strong>Registration Deadline:</strong> {new Date(data.deadline).toLocaleString()}
                </p>

                {/* Description */}
                <p className="text-base mb-4">
                  <strong>Description:</strong> {data.description}
                </p>

                {/* Maximum Participants */}
                <p className="text-base mb-4">
                  <strong>Max Participants:</strong> {data.max}
                </p>

                {/* Job Desk */}
                <p className="text-base mb-4">
                  <strong>Jobdesk:</strong> {data.jobdesk}
                </p>

                {/* Requirements */}
                <p className="text-base mb-4">
                  <strong>Requirement:</strong> {data.requirement}
                </p>

                {/* Domicile */}
                <p className="text-base mb-4">
                  <strong>Domicile:</strong> {data.domicile}
                </p>
              </CardContent>

              {/* Card Footer */}
              <CardFooter>
                <p className="text-base text-gray-500">
                  <strong>Additional Information:</strong> {data.addtional_information}
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </ScrollArea>
    </DashboardLayout>
  )
}

export default DashboardActivityDetail