export enum UserRole {
  USER = 'USER',
  DRIVER = 'DRIVER',
  ADMIN = 'ADMIN'
}

export enum BookingStatus {
  REQUESTED = 'REQUESTED',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED'
}

export enum BookingType {
  RIDE = 'RIDE',
  DELIVERY = 'DELIVERY'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  rating?: number;
}

export interface Driver extends User {
  isOnline: boolean;
  vehicle: string;
  earnings: number;
  totalRides: number;
}

export interface Booking {
  id: string;
  userId: string;
  driverId?: string;
  pickup: string;
  dropoff: string;
  fare: number;
  status: BookingStatus;
  timestamp: number;
  rating?: number;
  type: BookingType;
  parcelDetails?: string;
}

export interface Stats {
  totalUsers: number;
  totalDrivers: number;
  totalRevenue: number;
  activeRides: number;
}