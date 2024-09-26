'use client'

import { useReportWebVitals } from 'next/web-vitals'

export const WebVitalsReporter = () => {
  useReportWebVitals((metric) => {
    const {
      id, name, label, value,
    } = metric

    if (typeof window !== 'undefined' && (window).gtag) {
      (window).gtag('event', name, {
        event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: id,
        non_interaction: true,
      })
    }
  })

  return null
}
