export interface MonthlySalesInterface {
  month: string;
  revenue: number;
  orders: number;
  customers: number;
}

export interface SummaryInterface {
  totalCustomers: number;
  totalRevenue: number;
  totalOrders: number;
}
