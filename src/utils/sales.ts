import { MonthlySalesInterface } from "../interfaces/monthlySales.interface";

export const monthlySales: MonthlySalesInterface[] = [
  { month: "Jan", revenue: 120, orders: 320, customers: 80 },
  { month: "Feb", revenue: 150, orders: 400, customers: 95 },
  { month: "Mar", revenue: 170, orders: 450, customers: 110 },
  { month: "Apr", revenue: 140, orders: 390, customers: 100 },
  { month: "May", revenue: 180, orders: 470, customers: 120 },
  { month: "Jun", revenue: 200, orders: 510, customers: 130 },
  { month: "Jul", revenue: 220, orders: 550, customers: 140 },
  { month: "Aug", revenue: 240, orders: 600, customers: 150 },
  { month: "Sep", revenue: 230, orders: 580, customers: 145 },
  { month: "Oct", revenue: 250, orders: 610, customers: 155 },
  { month: "Nov", revenue: 260, orders: 630, customers: 160 },
  { month: "Dec", revenue: 280, orders: 680, customers: 175 },
];

export function getYearlySalesSummary(monthlyData: MonthlySalesInterface[]) {
  return monthlyData.reduce(
    (acc, month) => {
      acc.totalRevenue += month.revenue;
      acc.totalOrders += month.orders;
      acc.totalCustomers += month.customers;
      return acc;
    },
    { totalRevenue: 0, totalOrders: 0, totalCustomers: 0 }
  );
}

export const getSeries = () => {
  const revenueTarget = 3000;
  const summary = getYearlySalesSummary(monthlySales);
  // console.log(revenueGenerated);
  return parseFloat(((summary?.totalRevenue / revenueTarget) * 100).toFixed(2));
};
