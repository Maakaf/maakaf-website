import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  // TODO: Move these data items to a centeralized such as a JSON file for all the metadata and general data for the site.

  const footerLinks: FooterLink[] = [
    {
      label: 'Contributers',
      href: '/contributers',
    },
    {
      label: 'Newbies',
      href: '/newbies',
    },
    {
      label: 'Maintainers',
      href: '/maintainers',
    },
    {
      label: 'הפרויקטים',
      href: '/theprojects',
    },
    {
      label: 'יצירת קשר',
      href: '/contact',
    },
    {
      label: 'מי אנחנו',
      href: '/whoweare',
    },
  ]

  const leftFooterLinks: FooterLink[] = [
    {
      label: 'תנאי שימוש',
      href: '/termsconditions',
    },
    {
      label: 'הגדרות פרטיות',
      href: '/privacy',
    },
  ]

  const footerSocialLinks: FooterSocialLink[] = [
    {
      label: 'Facebook',
      href: 'http://facebook.com/',
      icon: '/icons/facebook.svg',
    },
    {
      label: 'LinkedIn',
      href: 'http://linkedin.com/',
      icon: '/icons/linkedin.svg',
    },
    {
      label: 'Twitter(X)',
      href: 'http://twitter.com/',
      icon: '/icons/twitter.svg',
    },
  ]

  return (
    <div className='min-h-[177px] max-w-[80%] flex-col md:flex-row justify-between mx-auto whitespace-nowrap flex py-6'>
      <ul
        className='grid grid-rows-3 grid-flow-col gap-6 mb-12 md:mb-0  md:gap-0'
        style={{ rowGap: '1.75em' }}
      >
        {footerLinks.map((link: FooterLink) => (
          <li key={link.href} className='md:pl-24 mx-auto md:mx-0'>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className='flex flex-col mx-auto md:mx-0 md:justify-between items-center gap-4 md:gap-0 md:items-end'>
        <ul className='flex gap-12'>
          {footerSocialLinks.map((socialLink: FooterSocialLink) => (
            <li key={socialLink.href}>
              <Link href={socialLink.href} target='_blank'>
                <Image
                  src={socialLink.icon}
                  width={52}
                  height={52}
                  alt={socialLink.label}
                />
              </Link>
            </li>
          ))}
        </ul>
        <ul className='flex gap-16 text-sm'>
          {leftFooterLinks.map((link: FooterLink) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

type FooterLink = Omit<FooterSocialLink, 'icon'>

type FooterSocialLink = {
  label: string
  icon: string
  href: string
}

export default Footer
