export interface Product {
  id: string;
  name: string;
  price: number;
  types: [
    { all_limited_links: boolean },
    { analytics_platform: boolean },
    { chat_support: boolean },
    { optimize_hashtag: boolean },
    { unlimited: boolean },
  ];
}
