import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-25': '#7A7E80',
      'dark-50': '#464A4D',
      'dark-75': '#161719',
      'dark-100': '#0D0E0F',
      'light-20': '#91919F',
      'light-40': '#F2F4F5',
      'light-60': '#F7F9FA',
      'light-80': '#FBFBFB',
      'light-100': '#FFFFFF',
      'primary-20': '#EEE5FF',
      'primary-40': '#D3BDFF',
      'primary-60': '#B18AFF',
      'primary-80': '#8F57FF',
      'primary-100': '#7F3DFF',
      'secondary-20': '#BDDCFF',
      'secondary-40': '#8AC0FF',
      'secondary-60': '#57A5FF',
      'secondary-80': '#248AFF',
      'secondary-100': '#0077FF',
      'success-20': '#CFFAEA',
      'success-40': '#93EACA',
      'success-60': '#65D1AA',
      'success-80': '#2AB784',
      'success-100': '#00A86B',
      'warning-20': '#FCEED4',
      'warning-40': '#FCDDA1',
      'warning-60': '#FCCC6F',
      'warning-80': '#FCBB3C',
      'warning-100': '#FCAC12',
      'danger-20': '#FDD5D7',
      'danger-40': '#FDA2A9',
      'danger-60': '#FD6F7A',
      'danger-80': '#FD5662',
      'danger-100': '#FD3C4A',
    },
    extend: {
      fontSize: {
        'title-x': '64px',
        'title-l': '32px',
        'title-m': '24px',
        'title-s': '18px',
        'text-x': '16px',
        'text-l': '14px',
        'text-m': '13px',
        'text-s': '12px',
      },
      lineHeight: {
        'title-x': '80px',
        'title-l': '34px',
        'title-m': '22px',
        'title-s': '22px',
        'text-x': '19px',
        'text-l': '18px',
        'text-m': '16px',
        'text-s': '12px',
      },
      keyframes: {
        "rotate-90": {
          from: {
            transform: "rotate(0deg)"
          },
          to: {
            transform: "rotate(90deg)"
          },
        },
        "rotate-90-reverse": {
          from: {
            transform: "rotate(90deg)"
          },
          to: {
            transform: "rotate(0deg)"
          },
        },
        "appears": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1"
          }
        }
      },
      animation: {
        "appears": "appears 0.3s ease-out forwards",
        "rotate-90": "rotate-90 0.4s ease-out forwards",
        "rotate-90-reverse": "rotate-90-reverse 0.4s ease-out forwards",
      }
    }
  },
  plugins: [],
}
export default config
