export interface BusinessVerticalCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  items: string[];
}

export interface GeographicMandate {
  id: string;
  region: string;
  role: string;
  statusTag: string;
  summary: string;
  focusAreas: string[];
}

export const BUSINESS_VERTICALS: BusinessVerticalCard[] = [
  {
    id: 'energy',
    title: 'Infrastructure & Clean Energy',
    subtitle: 'South Asia & Pakistan Solar Mandate',
    image: '/assets/pakistan-solar-mandate.jpg',
    href: '#infrastructure',
    items: [
      'Utility-Scale Solar PV Assets',
      'Commercial & Grid Resilience',
      'Local Engineering Partnerships',
    ],
  },
  {
    id: 'platforms',
    title: 'Consumer & Digital Platforms',
    subtitle: 'Cross-Border Commerce & Mobility',
    image: '/assets/digital-platforms-vertical.jpg',
    href: '#platforms',
    items: [
      'Cross-Border Mobility & Advisory',
      'Faith-Inspired Ethical Retail',
      'Europe & GCC Distribution',
    ],
  },
  {
    id: 'governance',
    title: 'Governance & Capital Stewardship',
    subtitle: 'UAE Holding & Shariah Framework',
    image: '/assets/uae-hq-architecture.jpg',
    href: '#governance',
    items: [
      'AAOIFI Shariah Alignment',
      '100% Equity · Zero-Debt Model',
      'Long-Term Real-Asset Focus',
    ],
  },
];

export const INFRASTRUCTURE_PILLARS = [
  {
    title: 'Utility-Scale Solar Assets',
    body: 'Capital allocation into power generation facilities that strengthen regional grids and drive industrial productivity.',
  },
  {
    title: 'Sustainable Impact',
    body: 'Fulfilling ecological stewardship by lowering carbon intensity while producing resilient financial returns.',
  },
  {
    title: 'Strategic Partnerships',
    body: 'Structuring projects alongside local operational partners and engineering specialists to execute high-efficiency energy projects.',
  },
];

export const DIGITAL_DIVISIONS = [
  {
    category: 'Operational Division',
    title: 'Cross-Border Mobility & Advisory',
    body: 'Infrastructure and digital services enabling international relocation, cross-border establishment, and asset positioning within the GCC and broader OIC region.',
    highlights: [
      'International Relocation Infrastructure',
      'GCC & OIC Establishment Services',
      'Cross-Border Asset Positioning',
    ],
  },
  {
    category: 'Operational Division',
    title: 'Faith-Inspired E-Commerce & Retail',
    body: 'Digital consumer platforms focused on ethical retail, specialized lifestyle goods, and international distribution across Europe and the GCC.',
    highlights: [
      'Specialized Ethical Consumer Goods',
      'Direct-to-Consumer Digital Commerce',
      'European & Gulf Fulfillment Networks',
    ],
  },
];

export const GOVERNANCE_CHARTER = [
  {
    num: '01',
    title: 'AAOIFI Standards',
    body: 'All investment structures, capital allocations, and equity participation frameworks strictly align with global Islamic finance standards (AAOIFI).',
  },
  {
    num: '02',
    title: 'Risk Management & Asset Protection',
    body: 'Portfolio diversification across defensive real-world infrastructure (energy) and cash-flow generating digital retail.',
  },
  {
    num: '03',
    title: 'Zero-Debt Leverage Model',
    body: 'Capital preservation prioritized through non-speculative, asset-backed equity deployment.',
  },
];

export const GEOGRAPHIC_MANDATES: GeographicMandate[] = [
  {
    id: 'uae',
    region: 'United Arab Emirates (HQ)',
    role: 'Treasury, Governance & Strategic Capital Management',
    statusTag: 'Principal Headquarters',
    summary:
      'Central holding structure domiciled in the United Arab Emirates, overseeing corporate governance, Shariah compliance, and cross-border equity allocation.',
    focusAreas: [
      'Registered Free Zone Holding Entity',
      'AAOIFI Shariah Governance Oversight',
      'Group Treasury & Capital Allocation',
    ],
  },
  {
    id: 'pakistan',
    region: 'Pakistan',
    role: 'Infrastructure, Solar Energy Generation & Real Assets',
    statusTag: 'Primary Energy Focus',
    summary:
      'Primary South Asia concentration directing private equity into long-term, yield-generating utility-scale solar and clean power infrastructure.',
    focusAreas: [
      'Utility-Scale Solar Photovoltaic Assets',
      'Commercial & Industrial Energy Supply',
      'Local EPC & Operational Co-Execution',
    ],
  },
  {
    id: 'gcc-europe',
    region: 'GCC & Western Europe',
    role: 'Digital Consumer Platforms & Trade Networks',
    statusTag: 'Operating Divisions',
    summary:
      'Active operational footprint across high-margin digital consumer platforms, ethical lifestyle retail, and cross-border mobility services.',
    focusAreas: [
      'Cross-Border Mobility & Advisory',
      'Ethical Consumer E-Commerce',
      'European & Gulf Trade Corridors',
    ],
  },
  {
    id: 'africa',
    region: 'Emerging Africa',
    role: 'Target Expansion Pipeline for Infrastructure Co-Investments',
    statusTag: 'Expansion Pipeline',
    summary:
      'Disciplined frontier pipeline evaluating asset-backed co-investments and productive infrastructure partnerships across high-growth African markets.',
    focusAreas: [
      'Productive Real-Asset Co-Investments',
      'Partner-Operated Frontier Projects',
      'Zero-Debt Equity Structures',
    ],
  },
];
