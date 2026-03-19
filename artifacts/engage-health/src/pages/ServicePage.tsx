import { useParams } from 'wouter';
import type { ServiceEntry } from '@/data/types';
import NotFound from '@/pages/not-found';
import ServicePageLayout from '@/components/service-page/ServicePageLayout';
import ServicePageSections from '@/components/service-page/ServicePageSections';

type Props = {
  category: 'employee-benefits' | 'international-benefits'
  services: ServiceEntry[]
}

export default function ServicePage({ category, services }: Props) {
  const params = useParams<{ slug: string }>();
  const entry = services.find(s => s.slug === params.slug);
  if (!entry) return <NotFound />;
  return (
    <ServicePageLayout
      entry={entry}
      category={category}
      currentSlug={params.slug}
      allServices={services}
    >
      <ServicePageSections sections={entry.sections} colorScheme={entry.colorScheme} />
    </ServicePageLayout>
  );
}
