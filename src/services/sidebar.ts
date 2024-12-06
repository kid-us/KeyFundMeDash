interface Menu {
  id: number;
  name: string;
  icon: string;
  path: string;
  sub?: boolean;
}

export const menus: Menu[] = [
  {
    id: 1,
    icon: "microsoft",
    name: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    icon: "database-fill",
    name: "Fundraising",
    path: "/fundraising",
    sub: true,
  },
  {
    id: 3,
    icon: "gear-fill",
    name: "Setting",
    path: "/setting",
  },
];

export const fund: Menu[] = [
  {
    id: 1,
    icon: "hourglass-split",
    name: "Pending",
    path: "/pending",
  },
  {
    id: 2,
    icon: "check-all",
    name: "Approved",
    path: "/approved",
  },
  {
    id: 3,
    icon: "x-lg",
    name: "Declined",
    path: "/declined",
  },
  {
    id: 4,
    icon: "patch-check-fill",
    name: "Completed",
    path: "/completed",
  },
  {
    id: 5,
    icon: "battery",
    name: "Deactivated",
    path: "/deactivated",
  },
];
