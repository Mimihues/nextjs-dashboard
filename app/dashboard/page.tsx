import { Card } from '@/app/ui/cards';
import RevenueChart from '@/app/ui/revenue-chart';
import LatestInvoices from '@/app/ui/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';

export default async function Page() {
  // 1. Obtenemos los datos de la base de datos (Capítulo 7)
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Recaudado" value={totalPaidInvoices} type="collected" />
        <Card title="Pendiente" value={totalPendingInvoices} type="pending" />
        <Card title="Total Facturas" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Clientes"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}