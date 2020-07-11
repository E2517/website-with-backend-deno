import Main from './views/main.js'

export async function handler( /*req: object*/ ) {
    return {
        headers: {
            'content-type': 'text/html; charset=utf8',
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
        },
        body: Main({
            /**
             * Basic bio
             */
            fullname: 'Manu', // ←  Start by adding your name!
            title: 'Celoson',
            occupation: 'Mentor',
            location: 'Earth',
            bio: 'Coders are coders coding codes for coders to code codes',

            /**
             * Contact / social
             * - Comment out any item below to remove it from your page
             */
            email: 'your@email.com',
            twitter: 'yourTwitter',
            linkedin: 'your-linkedin-name',
            instagram: 'yourInsta',
            facebook: 'your-facebook-name',

            /**
             * Layout
             */
            photographer: 'Ivana Cajina',
            service: 'Unsplash',
            credit: 'https://unsplash.com/@von_co',
            image: '_static/background.jpg'
        })
    }
}