import React from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
} from 'lucide-react'

const socialLinks = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  youtube: 'https://youtube.com',
  email: 'mailto:ajarek@poczta.onet.pl',
}
const MySocial = () => {
  return (
    <div>
      <div className='flex space-x-6'>
        {socialLinks.facebook && (
          <a
            href={socialLinks.facebook}
            target='_blank'
            rel='noopener noreferrer'
            className=' hover:text-gray-500 transition duration-200'
            aria-label='facebook'
          >
            <Facebook size={24} />
          </a>
        )}
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            target='_blank'
            rel='noopener noreferrer'
            className=' hover:text-gray-500 transition duration-200'
            aria-label='twitter'
          >
            <Twitter size={24} />
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-500 transition duration-200'
            aria-label='instagram'
          >
            <Instagram size={24} />
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className=' hover:text-gray-500 transition duration-200'
            aria-label='linkedin'
          >
            <Linkedin size={24} />
          </a>
        )}
        {socialLinks.youtube && (
          <a
            href={socialLinks.youtube}
            target='_blank'
            rel='noopener noreferrer'
            className=' hover:text-gray-500 transition duration-200'
            aria-label='youtube'
          >
            <Youtube size={24} />
          </a>
        )}
        {socialLinks.email && (
          <a
            href={`mailto:${socialLinks.email}`}
            aria-label='email'
            className=' hover:text-gray-500 transition duration-200'
          >
            <Mail size={24} />
          </a>
        )}
      </div>
    </div>
  )
}

export default MySocial
