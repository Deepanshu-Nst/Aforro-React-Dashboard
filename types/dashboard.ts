// Dashboard widget data types

export interface StatCard {
  id: string;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  colorScheme: "pink" | "orange" | "green" | "purple";
}

export interface RevenueDataPoint {
  day: string;
  online: number;
  offline: number;
}

export interface VisitorDataPoint {
  month: string;
  loyal: number;
  newCustomers: number;
  unique: number;
}

export interface SatisfactionDataPoint {
  month: string;
  lastMonth: number;
  thisMonth: number;
}

export interface TargetVsRealityDataPoint {
  month: string;
  reality: number;
  target: number;
}

export interface TopProduct {
  rank: number;
  name: string;
  popularity: number;
  sales: number;
  color: string;
}

export interface VolumeServiceDataPoint {
  label: string;
  volume: number;
  services: number;
}
