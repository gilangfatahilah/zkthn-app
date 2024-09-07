import DashboardLayout from '@/Layouts/DashboardLayout'
import { Activity, PageProps } from '@/types'
import { useEffect } from 'react'

const DashboardActivityDetail = ({ auth, activity }: PageProps<{ activity: Activity[] }>) => {
  const data = activity[0]

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <DashboardLayout user={auth.user}>
      <div>DashboardActivityDetail</div>
    </DashboardLayout>
  )
}

export default DashboardActivityDetail