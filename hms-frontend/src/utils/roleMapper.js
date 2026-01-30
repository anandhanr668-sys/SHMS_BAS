import { ROLES } from "./constants";

export const roleRouteMap = {
  [ROLES.ADMIN]: [
    "/admin",
    "/admin/forms",
    "/admin/rules",
    "/admin/reports"
  ],
  [ROLES.DOCTOR]: ["/doctor"],
  [ROLES.NURSE]: ["/nurse"],
  [ROLES.FRONTDESK]: ["/frontdesk"],
  [ROLES.PATIENT]: ["/patient"]
};
