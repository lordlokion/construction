import { notFound } from 'next/navigation'
import ServicePage from '@/app/components/ServicePage'
import { services } from '@/lib/services'

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return <ServicePage service={service} />
}