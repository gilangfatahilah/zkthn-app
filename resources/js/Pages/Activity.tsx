import ActivityCard from "@/Components/ActivtyCard";
import HomeLayout from "@/Layouts/HomeLayout";
import { Activity, PageProps } from "@/types";

const ActivityPage = ({ auth, activity }: PageProps<{ activity: Activity[] }>) => {
  return (
    <HomeLayout user={auth.user}>
      <ActivityCard activities={activity} />
    </HomeLayout>
  );
};

export default ActivityPage;
