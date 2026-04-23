/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(NaN, NaN%, 97%)',
            '100': 'hsl(NaN, NaN%, 94%)',
            '200': 'hsl(NaN, NaN%, 86%)',
            '300': 'hsl(NaN, NaN%, 76%)',
            '400': 'hsl(NaN, NaN%, 64%)',
            '500': 'hsl(NaN, NaN%, 50%)',
            '600': 'hsl(NaN, NaN%, 40%)',
            '700': 'hsl(NaN, NaN%, 32%)',
            '800': 'hsl(NaN, NaN%, 24%)',
            '900': 'hsl(NaN, NaN%, 16%)',
            '950': 'hsl(NaN, NaN%, 10%)',
            DEFAULT: '#61ce70'
        },
        secondary: {
            '50': 'hsl(NaN, NaN%, 97%)',
            '100': 'hsl(NaN, NaN%, 94%)',
            '200': 'hsl(NaN, NaN%, 86%)',
            '300': 'hsl(NaN, NaN%, 76%)',
            '400': 'hsl(NaN, NaN%, 64%)',
            '500': 'hsl(NaN, NaN%, 50%)',
            '600': 'hsl(NaN, NaN%, 40%)',
            '700': 'hsl(NaN, NaN%, 32%)',
            '800': 'hsl(NaN, NaN%, 24%)',
            '900': 'hsl(NaN, NaN%, 16%)',
            '950': 'hsl(NaN, NaN%, 10%)',
            DEFAULT: '#ffcc00'
        },
        accent: {
            '50': 'hsl(NaN, NaN%, 97%)',
            '100': 'hsl(NaN, NaN%, 94%)',
            '200': 'hsl(NaN, NaN%, 86%)',
            '300': 'hsl(NaN, NaN%, 76%)',
            '400': 'hsl(NaN, NaN%, 64%)',
            '500': 'hsl(NaN, NaN%, 50%)',
            '600': 'hsl(NaN, NaN%, 40%)',
            '700': 'hsl(NaN, NaN%, 32%)',
            '800': 'hsl(NaN, NaN%, 24%)',
            '900': 'hsl(NaN, NaN%, 16%)',
            '950': 'hsl(NaN, NaN%, 10%)',
            DEFAULT: '#6ec1e4'
        },
        'neutral-50': '#333333',
        'neutral-100': '#000000',
        'neutral-200': '#7a7a7a',
        'neutral-300': '#ffffff',
        'neutral-400': '#494c4f',
        'neutral-500': '#efefef',
        background: '#000000',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            '-apple-system',
            'sans-serif'
        ],
        body: [
            'monospace',
            'sans-serif'
        ],
        font2: [
            'Roboto',
            'sans-serif'
        ],
        font4: [
            'GFS Didot',
            'sans-serif'
        ],
        font8: [
            'Arial',
            'sans-serif'
        ]
    },
    fontSize: {
        '0': [
            '0px',
            {
                lineHeight: '0px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '14px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '15px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '18.4px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '20px'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '22px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '32px'
            }
        ],
        '37': [
            '37px',
            {
                lineHeight: '37px'
            }
        ],
        '38': [
            '38px',
            {
                lineHeight: '38px'
            }
        ],
        '55': [
            '55px',
            {
                lineHeight: '55px'
            }
        ],
        '18.72': [
            '18.72px',
            {
                lineHeight: '22.464px'
            }
        ],
        '13.3333': [
            '13.3333px',
            {
                lineHeight: 'normal'
            }
        ]
    },
    spacing: {
        '15': '30px',
        '20': '40px',
        '25': '50px',
        '50': '100px',
        '115': '230px',
        '150': '300px',
        '1px': '1px'
    },
    borderRadius: {
        sm: '3px'
    },
    screens: {
        md: '768px',
        lg: '1025px',
        '2xl': '1600px',
        '2400px': '2400px'
    },
    transitionDuration: {
        '300': '0.3s',
        '400': '0.4s'
    },
    container: {
        center: true,
        padding: '10px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
