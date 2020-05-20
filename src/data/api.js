// this is copied from the tutorial 'How to Use Wordpress as a Headless CMS' at https://www.youtube.com/watch?v=fLZ0C5RBAxE

const endPoint = 'https://offlineabsence.wordpress.com/wp-json'

const wpAPI = {
    settings: `${endPoint}/wp/v2/settings`,
    posts: `${endPoint}/wp/v2/posts`,
    pages: `${endPoint}/wp/v2/pages`,
    postTypes: `${endPoint}/wp/v2/types`,
    acf: `${endPoint}/acf/v3/posts`,
}

export default {endPoint, wpAPI}