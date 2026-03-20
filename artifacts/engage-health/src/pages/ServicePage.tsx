import { useParams } from 'wouter';
import type { ServiceEntry } from '@/data/types';
import NotFound from '@/pages/not-found';
import ServicePageLayout from '@/components/service-page/ServicePageLayout';
import ServicePageSections from '@/components/service-page/ServicePageSections';
import { usePageData } from '@/hooks/useWordPress';

type Props = {
  category: 'employee-benefits' | 'international-benefits'
  services: ServiceEntry[]
}

export default function ServicePage({ category, services }: Props) {
  const params = useParams<{ slug: string }>();
  const entry = services.find(s => s.slug === params.slug);
  
  // Attempt to fetch any synced dynamic data from WordPress for this page
  // The query uses the slug as the URI to find the corresponding WordPress page
  const { data, isError } = usePageData(params.slug);

  if (!entry) return <NotFound />;

  // Merge WordPress dynamic overrides if the fetch was successful
  // This allows the WP dashboard to configure things like Hero Title without breaking local structure
  const displayEntry = { ...entry };
  if (!isError && data?.pageBy?.title) {
    displayEntry.title = data.pageBy.title;
  }

  return (
    <ServicePageLayout
      entry={displayEntry}
      category={category}
      currentSlug={params.slug}
      allServices={services}
    >
      <ServicePageSections sections={entry.sections} colorScheme={entry.colorScheme} />
    </ServicePageLayout>
  );
}
