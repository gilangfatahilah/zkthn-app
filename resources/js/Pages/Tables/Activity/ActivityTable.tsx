import DashboardLayout from "@/Layouts/DashboardLayout"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Activity, PageProps } from "@/types"
import { Heading } from "@/Components/Heading"
import Breadcrumbs from "@/Components/Breadcrumb"
import { Link } from "@inertiajs/react"
import { Plus } from "lucide-react"
import { buttonVariants } from "@/Components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { useToastStore } from "@/hooks/useToastStore"
import { toast } from "sonner"
import { ScrollArea } from "@/Components/ui/scroll-area"

interface TableProps {
  auth: PageProps['auth'];
  activity: Activity[];
}

const breadcrumbItems = [{ label: 'Dashboard', href: '/dashboard' }, { label: 'Activity' }]

export default function ActivityTable({ auth, activity }: TableProps) {
  const { showToast, message, hideToast } = useToastStore();

  useEffect(() => {
    if (showToast && message) {
      toast.success(`Data user berhasil ${message} !`);

      hideToast();
    }
  }, [])


  return (
    <DashboardLayout user={auth.user}>
      <ScrollArea className="h-full">

        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">

          <Breadcrumbs items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading title="Aktivitas" description="Informasi mengenai pengguna dan kelola pengguna." />

            <Link href="/dashboard/activity/create" className={cn(buttonVariants({ variant: 'default' }))}>
              <Plus className="mr-2 h-4 w-4" />
              Aktivitas
            </Link>
          </div>
          <DataTable columns={columns} data={activity} />
        </div>

      </ScrollArea>

    </DashboardLayout>
  )
}
