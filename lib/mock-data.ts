import type {
  RevenueDataPoint,
  VisitorDataPoint,
  SatisfactionDataPoint,
  TargetVsRealityDataPoint,
  TopProduct,
  VolumeServiceDataPoint,
} from "@/types/dashboard";

export const revenueData: RevenueDataPoint[] = [
  { day: "Monday", online: 18000, offline: 9000 },
  { day: "Tuesday", online: 22000, offline: 13000 },
  { day: "Wednesday", online: 15000, offline: 7000 },
  { day: "Thursday", online: 25000, offline: 11000 },
  { day: "Friday", online: 20000, offline: 16000 },
  { day: "Saturday", online: 17000, offline: 8000 },
  { day: "Sunday", online: 23000, offline: 14000 },
];

export const visitorData: VisitorDataPoint[] = [
  { month: "Jan", loyal: 320, newCustomers: 180, unique: 280 },
  { month: "Feb", loyal: 280, newCustomers: 220, unique: 310 },
  { month: "Mar", loyal: 350, newCustomers: 160, unique: 290 },
  { month: "Apr", loyal: 300, newCustomers: 240, unique: 330 },
  { month: "May", loyal: 380, newCustomers: 200, unique: 260 },
  { month: "Jun", loyal: 340, newCustomers: 280, unique: 310 },
  { month: "Jul", loyal: 420, newCustomers: 300, unique: 350 },
  { month: "Sept", loyal: 390, newCustomers: 260, unique: 380 },
  { month: "Oct", loyal: 360, newCustomers: 220, unique: 320 },
  { month: "Nov", loyal: 400, newCustomers: 290, unique: 360 },
  { month: "Dec", loyal: 450, newCustomers: 320, unique: 400 },
];

export const satisfactionData: SatisfactionDataPoint[] = [
  { month: "Jan", lastMonth: 3100, thisMonth: 4200 },
  { month: "Feb", lastMonth: 2800, thisMonth: 3900 },
  { month: "Mar", lastMonth: 3400, thisMonth: 4600 },
  { month: "Apr", lastMonth: 2900, thisMonth: 3800 },
  { month: "May", lastMonth: 3600, thisMonth: 4900 },
  { month: "Jun", lastMonth: 3004, thisMonth: 4504 },
];

export const targetVsRealityData: TargetVsRealityDataPoint[] = [
  { month: "Jan", reality: 6800, target: 8500 },
  { month: "Feb", reality: 7200, target: 9200 },
  { month: "Mar", reality: 6500, target: 8000 },
  { month: "Apr", reality: 8823, target: 12123 },
  { month: "May", reality: 7400, target: 10000 },
  { month: "Jun", reality: 8100, target: 11500 },
  { month: "Jul", reality: 9200, target: 13000 },
];

export const topProducts: TopProduct[] = [
  { rank: 1, name: "Home Decor Range", popularity: 85, sales: 45, color: "#6C5CE7" },
  { rank: 2, name: "Disney Princess Pink Bag 18", popularity: 65, sales: 29, color: "#00CEC9" },
  { rank: 3, name: "Bathroom Essentials", popularity: 45, sales: 18, color: "#A29BFE" },
  { rank: 4, name: "Apple Smartwatches", popularity: 55, sales: 25, color: "#FDCB6E" },
];

export const volumeServiceData: VolumeServiceDataPoint[] = [
  { label: "Jan", volume: 900, services: 500 },
  { label: "Feb", volume: 1100, services: 620 },
  { label: "Mar", volume: 800, services: 450 },
  { label: "Apr", volume: 1135, services: 635 },
  { label: "May", volume: 950, services: 580 },
  { label: "Jun", volume: 1050, services: 700 },
];
