import { ogImage, ogSize } from '@/lib/og'

export const alt = 'Abdul Mueed — Software Architect & Full Stack Engineer'
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return ogImage({ title: 'Mueed', subtitle: 'Software architect · Full stack engineer · Product builder', kicker: 'Abdul Mueed' })
}
