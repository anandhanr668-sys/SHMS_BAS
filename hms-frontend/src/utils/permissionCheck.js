import { roleRouteMap } from "./roleMapper";

export const hasPermission = (role, path) => {
  const allowedRoutes = roleRouteMap[role] || [];
  return allowedRoutes.some((r) => path.startsWith(r));
};
