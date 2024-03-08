import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

export default async function ServerPage() {
  const user = await currentUser();
  return (
    <div className="bg-white p-10 ">
      <UserInfo user={user} label="Server component" />
    </div>
  );
}
