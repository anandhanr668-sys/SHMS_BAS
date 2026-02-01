import { rolePermissionMap } from "./roleMapper";

export const hasPermission = (role, permission) => {
  if (!role) return false;
  return rolePermissionMap[role]?.includes(permission);
};

