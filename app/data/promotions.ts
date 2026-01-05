import type { PromotionItem } from "~/types/promotion";

export const promotions : PromotionItem[] = [
 {
    id: 1,
    title: 'Weekend Getaway Deal',
    description: 'Save 15% on all luxury cars this weekend only!',
    image: 'https://kiowacountypress.net/sites/default/files/styles/article_lg/public/field/image/promo_660_x_440_people_-_family_cars_auto_vehicles_family_man_woman_children_kids_driving_-_istock_-_solovyova.jpg.webp?itok=wpi4fbIu',
    discountPercent: 15,
    validFrom: '2025-10-25',
    validTo: '2025-10-31',
    terms: 'Available for rentals over 2 days only.',
    isActive: true
  },
  {
    id: 2,
    title: 'Early Bird Special',
    discountPercent: 10,
    image: 'https://kiowacountypress.net/sites/default/files/styles/article_lg/public/field/image/promo_660_x_440_people_-_family_cars_auto_vehicles_family_man_woman_children_kids_driving_-_istock_-_solovyova.jpg.webp?itok=wpi4fbIu',
    validFrom: '2025-11-01',
    validTo: '2025-11-15'
  },  
  {
    id: 3,
    title: 'Holiday Special',
    discountPercent: 30,
    image: 'https://kiowacountypress.net/sites/default/files/styles/article_lg/public/field/image/promo_660_x_440_people_-_family_cars_auto_vehicles_family_man_woman_children_kids_driving_-_istock_-_solovyova.jpg.webp?itok=wpi4fbIu',
    validFrom: '2025-12-01',
    validTo: '2025-12-30'
  }
]