import { fetchAllLandingPageServices } from '@/services'
import React from 'react'
import { ServicesSliderClient } from './services-slider.client'

export async function ServicesSlider() {
  const data = await fetchAllLandingPageServices()

  return <ServicesSliderClient services={data.data} />
}
