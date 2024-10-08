import { render } from '@testing-library/react'
import { NextWebVitalsMetric } from 'next/app'
import { WebVitalsReporter } from '@lib'

jest.mock('next/web-vitals', () => ({
  useReportWebVitals: (callback: (metric: NextWebVitalsMetric) => void) => {
    const mockMetric: NextWebVitalsMetric = {
      id: 'v1-1234567890',
      name: 'FCP',
      label: 'web-vital',
      value: 123.45,
      startTime: 0, // Required property
    }
    callback(mockMetric)
  },
}))

describe('WebVitalsReporter', () => {
  beforeAll(() => {
    // Mock window.gtag
    Object.defineProperty(window, 'gtag', {
      value: jest.fn(),
      writable: true,
    })
  })

  it('should report web vitals using window.gtag', () => {
    render(<WebVitalsReporter />)

    expect(window.gtag).toHaveBeenCalledWith('event', 'FCP', {
      event_category: 'Web Vitals',
      value: 123,
      event_label: 'v1-1234567890',
      non_interaction: true,
    })
  })
})
