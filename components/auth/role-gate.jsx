"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "./form-error";

export const RoleGate = ({ children, allowedRole }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You don't have permission to view this content." />
    );
  }
  return <>{children}</>;
};
