import Breadcrumbs from '@/Components/Breadcrumb'
import { Heading } from '@/Components/Heading'
import { InputTags } from '@/Components/InputTags'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { Textarea } from '@/Components/ui/textarea'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { PageProps } from '@/types'
import { useState } from 'react'

const breadcrumbItems = [{ label: 'Dashboard', href: '/dashboard' }, { label: 'Activity', href: '/dashboard/activity' }, { label: 'Create' }]

const AddActivity = ({ auth }: PageProps) => {
  const [values, setValues] = useState<string[]>([])

  return (
    <DashboardLayout user={auth.user}>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <Heading title="Aktivitas" description="Informasi mengenai pengguna dan kelola pengguna." />

        <Card>
          <CardContent className="grid gap-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="title">Judul</Label>
                <Input id="title" placeholder="Enter client name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="phone">Category</Label>
                <InputTags id='phone' value={values} onChange={setValues} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter company name" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter any additional notes" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Create Client</Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default AddActivity