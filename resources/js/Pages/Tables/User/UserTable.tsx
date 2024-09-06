import DashboardLayout from "@/Layouts/DashboardLayout"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { PageProps, User } from "@/types"
import { Heading } from "@/Components/Heading"
import Breadcrumbs from "@/Components/Breadcrumb"

interface TableProps {
  auth: PageProps['auth'];
  users: User[];
}

const breadcrumbItems = [{ label: 'Dashboard', href: '/dashboard' }, { label: 'User', href: '/dashboard/user' }]

export default function UserTable({ auth, users }: TableProps) {

  return (
    <DashboardLayout user={auth.user}>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">

        <Breadcrumbs items={breadcrumbItems} />
        <Heading title="Pengguna" description="Informasi mengenai pengguna dan kelola pengguna." />
        <DataTable columns={columns} data={users} />
      </div>
    </DashboardLayout>
  )
}
